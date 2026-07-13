# LTR Trade Frontend Implementation Plan

Reference site: https://fundingpips.com/  
Target project path: `C:\Users\osama\source\repos\my_github\Usama_Workspace\work\freelancer\LTR-alpha\frotnend`

This plan is intentionally scoped for the first implementation pass. Do not build the full dashboard product yet. Phase 1 is:

1. Build the public landing page inspired by FundingPips.
2. Set up the dashboard route structure and shell only.
3. Add minimal placeholder dashboard pages:
   - Super Admin Overview
   - Super Admin Users
   - Super Admin Profile or Settings
   - Client Overview
   - Client Profile or Settings

Everything else should stay as future planning notes until the product sections are confirmed.

## 1. Product Scope

The frontend should feel close to FundingPips in layout, motion, and section rhythm, but it must not copy their exact brand assets, logo, or text.

The application should have:

- A public landing page at `/`.
- Auth/login route if the project already has one, or a placeholder route if auth is not ready.
- A protected dashboard route group under `/dashboard`.
- Two dashboard experiences:
  - `SUPER_ADMIN`: overview, users, profile/settings.
  - `CLIENT`: overview, profile/settings.

## 2. Phase 1 Hard Scope

Build now:

- Landing page.
- Marketing navigation/header.
- Landing page responsive behavior.
- Landing page interactions and animations.
- Dashboard route tree.
- Dashboard shell/layout.
- Dashboard sidebar with only MVP links.
- Empty/minimal dashboard pages listed above.

Do not build now:

- Full auth integration if backend is not ready.
- Real checkout.
- Real user management mutations.
- Roles and permissions management UI.
- Orders/purchases.
- Payouts/rewards.
- Challenge/account workflows.
- Support/tickets.
- CMS/content dashboard.
- Audit logs.
- Reports.

Future modules may be left as comments or config placeholders, but they must not appear as clickable broken sidebar links.

## 3. Reference Landing Page Inventory

The FundingPips page includes these important sections and patterns:

1. Top announcement bar.
2. Sticky marketing header.
3. Desktop products mega-menu.
4. Mobile dropdown/sheet navigation.
5. Hero with large title, CTAs, stats, and 3D blue/glass visual.
6. Social proof stats and rating badges.
7. Value proposition section with app/reward mockup.
8. How it works section with three large cards.
9. Interactive pricing/challenge builder.
10. Trader journey/timeline case study.
11. Success stories video carousel.
12. Trading conditions/features section.
13. Capital roadmap section.
14. Education/content cards.
15. Community/mock chat section.
16. Broker/platform phone mockup section.
17. Company/global stats dark section.
18. FAQ accordion.
19. Footer with legal text and links.

For our first implementation, include all major landing sections as static frontend content. The text and assets can be placeholders, but the layout should be polished and realistic.

## 4. Visual Direction

Use a premium fintech / prop-firm style:

- Deep navy primary surfaces.
- White and icy-blue backgrounds.
- Bright cyan/blue accents.
- Small emerald accents for success/rewards.
- Amber only for ratings/stars.
- Soft shadows.
- Glassy app mockups.
- Large clean typography.
- Calm operational dashboard UI.

Suggested tokens:

```css
--marketing-navy: #00245f;
--marketing-navy-deep: #00163d;
--marketing-aqua: #2fd9ff;
--marketing-blue: #1769ff;
--marketing-ice: #eff9ff;
--marketing-mint: #76f0d0;
--marketing-amber: #fbbf24;
```

Use the project's existing design system if one exists. If it uses shadcn, keep using shadcn/Radix components and Tailwind utilities.

Do not create a one-note blue-only page. Add white, slate, mint, emerald, and amber accents carefully.

## 5. Motion And Interaction Requirements

Use the existing motion library if available. If the project has `framer-motion`, use it. Otherwise use CSS transitions and intersection observers.

Required interactions:

- Announcement bar:
  - fixed height.
  - mobile marquee or clipped horizontal overflow.
- Header:
  - sticky.
  - changes background/shadow after scroll.
  - desktop products mega-menu fades/slides down.
  - mobile menu opens as a clean sheet/dropdown.
- Hero:
  - subtle floating visual.
  - CTA hover lift.
- Sections:
  - reveal on scroll.
  - staggered cards where appropriate.
- Pricing:
  - tabs for product type.
  - tabs or segmented controls for variant.
  - account size controls.
  - currency selector.
  - stable card dimensions.
- Carousel:
  - arrows on desktop.
  - scroll-snap on mobile.
- FAQ:
  - accordion animation.

Respect `prefers-reduced-motion`.

## 6. Recommended Route Structure

Prefer this route structure unless the existing project has a strong different pattern:

```txt
/
/login
/dashboard
/dashboard/client/overview
/dashboard/client/profile
/dashboard/super-admin/overview
/dashboard/super-admin/users
/dashboard/super-admin/profile
```

Optional alias:

```txt
/dashboard/client/settings -> /dashboard/client/profile
/dashboard/super-admin/settings -> /dashboard/super-admin/profile
```

Redirect rules:

- `/dashboard` redirects by role:
  - `SUPER_ADMIN` -> `/dashboard/super-admin/overview`
  - otherwise -> `/dashboard/client/overview`
- If auth is not implemented yet, use a temporary role flag or simple mock guard, but isolate it so it can be replaced later.
- Do not block landing page behind auth.

## 7. Suggested File Structure

Adapt to the actual project after inspecting it. If it is a Vite/React project, this structure is recommended:

```txt
src/
  app/
    routes/
      home/
        index.ts
        home.route.tsx
        _components/
          announcement-bar.tsx
          marketing-header.tsx
          marketing-mega-menu.tsx
          mobile-marketing-menu.tsx
          hero-section.tsx
          stats-strip.tsx
          value-prop-section.tsx
          how-it-works-section.tsx
          pricing-section.tsx
          trader-journey-section.tsx
          success-stories-section.tsx
          trading-conditions-section.tsx
          capital-roadmap-section.tsx
          education-section.tsx
          community-section.tsx
          broker-section.tsx
          company-section.tsx
          faq-section.tsx
          marketing-footer.tsx
        _data/
          marketing-content.ts
          pricing-options.ts
          faq-items.ts
          testimonials.ts
        _utils/
          motion.ts
      dashboard/
        dashboard-home-redirect.route.tsx
        _components/
          dashboard-shell.tsx
          dashboard-sidebar.tsx
          dashboard-topbar.tsx
        client/
          overview/
            index.ts
            client-overview.route.tsx
          profile/
            index.ts
            client-profile.route.tsx
        super-admin/
          overview/
            index.ts
            super-admin-overview.route.tsx
          users/
            index.ts
            super-admin-users.route.tsx
            _utils/
              search-params.ts
              columns.tsx
            _components/
              users-filter-popover-content.tsx
          profile/
            index.ts
            super-admin-profile.route.tsx
  components/
    marketing/
      reveal.tsx
      animated-counter.tsx
      mock-browser-window.tsx
      mock-phone.tsx
      pricing-card.tsx
      section-shell.tsx
```

If the existing project uses Next.js, Remix, TanStack Router, or a different folder convention, keep the same feature names but adapt to the framework's routing style.

## 8. Landing Page Build Plan

### 8.1 Home Page Composition

Render sections in this order:

1. AnnouncementBar
2. MarketingHeader
3. HeroSection
4. StatsStrip
5. ValuePropSection
6. HowItWorksSection
7. PricingSection
8. TraderJourneySection
9. SuccessStoriesSection
10. TradingConditionsSection
11. CapitalRoadmapSection
12. EducationSection
13. CommunitySection
14. BrokerSection
15. CompanySection
16. FAQSection
17. MarketingFooter

### 8.2 MarketingHeader

Desktop:

- Logo.
- Navigation links.
- Products button with mega-menu.
- Sign in link.
- Primary CTA.

Mobile:

- Logo.
- Menu icon.
- Sheet/dropdown with nav links.
- CTA buttons at bottom.

### 8.3 HeroSection

Desktop:

- Large left text.
- CTA row.
- Right visual.
- Stats/reviews near the fold.

Mobile:

- Header.
- Image/visual first.
- Centered H1.
- Compact copy.
- Three stat columns.
- Two CTAs.
- Review badges.

### 8.4 PricingSection

Use static data for now:

```ts
type ProductType = 'instant' | 'one_step' | 'two_step';
type ProductVariant = 'standard' | 'flex' | 'pro';
type AccountSize = '5k' | '10k' | '25k' | '50k' | '100k';
type Currency = 'USD' | 'EUR' | 'GBP';
```

Each pricing card should include:

- account size.
- price.
- CTA.
- profit target.
- max loss.
- daily loss.
- min trading days.
- reward split.

CTA can route to `/login` until checkout/register is ready.

## 9. Dashboard MVP Build Plan

### 9.1 Dashboard Shell

Build:

- Shared dashboard layout.
- Sidebar.
- Topbar.
- Content outlet.
- Role-aware nav item config.

Only show these nav items:

Super Admin:

- Overview
- Users
- Profile/Settings

Client:

- Overview
- Profile/Settings

### 9.2 Super Admin Overview

Initial page can be mostly static/placeholders.

Suggested content:

- Total users card.
- Active clients card.
- Pending actions card.
- Revenue/purchases placeholder card.
- Simple activity chart placeholder.
- Empty/recent activity panel.

### 9.3 Super Admin Users

Build route and page shell now.

If backend/users API exists:

- Use generated hooks or existing API client.
- Use server pagination/search.
- Columns:
  - name
  - email
  - role/type
  - status
  - created at
  - actions

If backend/users API does not exist:

- Use empty state.
- Keep table/search/filter structure ready.
- Do not fake write actions.

### 9.4 Client Overview

Initial page can be simple.

Suggested placeholder cards:

- Account status.
- Active plan/challenge placeholder.
- Recent activity placeholder.
- Quick action to profile/settings.

### 9.5 Profile/Settings

Can be shared UI for both roles.

Initial content:

- Name.
- Email.
- Role.
- Account status.
- Locale/theme preference if available.

Do not implement password changes unless backend supports it.

## 10. API And Data Integration

Use the existing API style in the project. If the project uses Orval + React Query, keep it.

Rules:

- Do not hand-write response types when generated API models exist.
- Keep API calls centralized.
- For list pages, keep search params in the URL.
- For mutations, invalidate relevant query keys.
- If backend is not ready, keep placeholders isolated and easy to replace.

## 11. Accessibility And Responsive Checks

Check:

- Desktop 1280x720.
- Mobile around 390x844.
- Header does not overlap content.
- Mobile menu is keyboard accessible.
- Pricing controls do not overflow.
- Buttons do not wrap badly.
- Text does not overlap cards.
- FAQ can be opened with keyboard.
- Reduced motion works.

## 12. Phase 1 Acceptance Criteria

Landing:

- All major reference sections exist.
- Looks polished and close in structure/feel to FundingPips.
- Uses original/custom assets or placeholders, not copied FundingPips assets.
- Works on desktop and mobile.
- Header, mega-menu, mobile menu, pricing tabs, carousel, FAQ all work.

Dashboard:

- `/dashboard` route exists.
- Role redirect exists or is stubbed cleanly.
- Dashboard shell exists.
- Sidebar shows only MVP routes.
- Super Admin Overview exists.
- Super Admin Users exists.
- Client Overview exists.
- Profile/Settings page exists.
- Future modules are not visible as broken links.

Quality:

- Typecheck passes.
- Lint/build pass if configured.
- No console errors in normal navigation.

## 13. Prompt For Implementation Model

Copy and give this prompt to the implementation model:

```text
You are implementing Phase 1 only for the frontend project at:
C:\Users\osama\source\repos\my_github\Usama_Workspace\work\freelancer\LTR-alpha\frotnend

Read IMPLEMENTATION_PLAN.md first and follow it exactly.

Primary goal:
Build the public landing page inspired by https://fundingpips.com/ and set up the dashboard route shell.

Important execution rule:
Do not implement everything in one run. Work phase by phase. Start with Phase 1A only, then stop and report exactly what changed, what was verified, and what should be done next. Wait for explicit approval before moving to Phase 1B, Phase 1C, or Phase 1D.

Phase 1A - Project inspection and setup plan only:
1. Inspect package.json, routing, folder structure, styling system, and existing UI libraries.
2. Detect framework and router.
3. Identify the exact files that need to be created/edited.
4. Do not make UI implementation yet unless the user explicitly approves continuing.
5. Return a concise implementation checklist for Phase 1B.

Phase 1B - Landing foundation:
1. Add the `/` landing route.
2. Add shared marketing data/config files.
3. Add the marketing header, mobile menu, hero, stats strip, and footer.
4. Verify desktop and mobile layout for these sections only.
5. Stop and report before continuing.

Phase 1C - Landing remaining sections and interactions:
1. Add value props, how it works, pricing, trader journey, stories carousel, trading conditions, roadmap, education/community/platform sections, and FAQ.
2. Add animations/interactions carefully.
3. Verify responsive behavior.
4. Stop and report before continuing.

Phase 1D - Dashboard route shell:
1. Set up dashboard routes only:
   - `/dashboard`
   - `/dashboard/client/overview`
   - `/dashboard/client/profile`
   - `/dashboard/super-admin/overview`
   - `/dashboard/super-admin/users`
   - `/dashboard/super-admin/profile`
2. Build dashboard shell with sidebar/topbar/content outlet.
3. Sidebar must show only:
   - Super Admin: Overview, Users, Profile/Settings
   - Client: Overview, Profile/Settings
4. Dashboard pages can be simple placeholders, but they must look intentional and match the app design.
5. Verify routing and stop.

Full Phase 1 hard scope, split across the sub-phases above:
1. Build landing page at `/`.
2. Add marketing header, mobile menu, mega-menu, hero, stats, value props, how it works, pricing, trader journey, stories carousel, conditions, roadmap, education/community/platform sections, FAQ, and footer.
3. Set up dashboard routes only:
   - `/dashboard`
   - `/dashboard/client/overview`
   - `/dashboard/client/profile`
   - `/dashboard/super-admin/overview`
   - `/dashboard/super-admin/users`
   - `/dashboard/super-admin/profile`
4. Build dashboard shell with sidebar/topbar/content outlet.
5. Sidebar must show only:
   - Super Admin: Overview, Users, Profile/Settings
   - Client: Overview, Profile/Settings
6. Dashboard pages can be simple placeholders, but they must look intentional and match the app design.

Do not implement:
- Roles/permissions UI
- Orders
- Payouts
- Challenge/account workflows
- Support
- Reports
- CMS/content dashboard
- Audit logs
- Checkout
- Backend write actions

Before coding:
1. Inspect package.json and current folder structure.
2. Detect framework and router.
3. Reuse existing patterns, aliases, UI components, styling, and API conventions.
4. If shadcn/Radix/Tailwind exist, use them.
5. If React Query/Orval exist, do not replace them.

Implementation rules:
- Keep changes scoped.
- Use data-driven arrays for landing content, nav links, pricing options, FAQs, and dashboard nav.
- Do not copy FundingPips exact images, logo, or text.
- Ensure desktop and mobile layouts are polished.
- Keep route structure easy to extend later.
- Future dashboard modules may be left as comments/config placeholders, but do not show broken sidebar links.

Verification:
- Run typecheck/lint/build using the project's package manager if available.
- Start the dev server and verify landing and dashboard routes in the browser.
- Check desktop and mobile responsiveness.
- Report what was implemented and what remains intentionally out of scope.
```

## 14. Future Plan Updates

When dashboard sections are confirmed, update this plan before implementation.

Future candidates:

Super Admin:

- Roles and permissions.
- Product/challenge templates.
- Orders/purchases.
- Payouts/rewards.
- Landing content management.
- Platform settings.
- Audit logs.
- Reports.

Client:

- Active challenges/accounts.
- Purchases.
- Payout/reward requests.
- Trading objectives.
- Support/tickets.
- Notifications.
- Billing/payment methods.
