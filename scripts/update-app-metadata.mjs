import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const validBumpTypes = new Set(['patch', 'minor', 'major'])
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDirectory, '..')
const packageJsonPath = path.join(projectRoot, 'package.json')
const packageLockPath = path.join(projectRoot, 'package-lock.json')
const [bumpType, ...flags] = process.argv.slice(2)
const dryRun = flags.includes('--dry-run')

if (!validBumpTypes.has(bumpType) || flags.some((flag) => flag !== '--dry-run')) {
  throw new Error(
    'Usage: node scripts/update-app-metadata.mjs <patch|minor|major> [--dry-run]',
  )
}

function getNextVersion(currentVersion, requestedBump) {
  const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(currentVersion)

  if (!match) {
    throw new Error(`Expected package.json version to use x.y.z format, received: ${currentVersion}`)
  }

  let major = Number(match[1])
  let minor = Number(match[2])
  let patch = Number(match[3])

  if (requestedBump === 'major') {
    major += 1
    minor = 0
    patch = 0
  } else if (requestedBump === 'minor') {
    minor += 1
    patch = 0
  } else {
    patch += 1
  }

  return `${major}.${minor}.${patch}`
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, 'utf8'))
}

async function writeJson(filePath, value) {
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

const packageJson = await readJson(packageJsonPath)
const nextVersion = getNextVersion(packageJson.version, bumpType)

if (dryRun) {
  console.log(`${bumpType}: ${packageJson.version} -> ${nextVersion}`)
} else {
  packageJson.version = nextVersion
  await writeJson(packageJsonPath, packageJson)

  try {
    const packageLock = await readJson(packageLockPath)
    packageLock.version = nextVersion

    if (packageLock.packages?.['']) {
      packageLock.packages[''].version = nextVersion
    }

    await writeJson(packageLockPath, packageLock)
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error
  }

  await import('./generate-app-metadata.mjs')
  console.log(`Updated application version: ${packageJson.version}`)
}

