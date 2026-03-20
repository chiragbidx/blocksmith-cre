# Changelog

## [2026-04-17] BrewCRM Initial Full Branding & Dashboard Structure

**Summary:**  
- Comprehensive update for BrewCRM brand, text values, navigation, and dashboard core workflow foundation.  
- Ready-to-ship baseline with updated homepage copy, authentication branding, dashboard navigation, and minimal dashboard workflow pages.

### Files Updated:
- `content/home.ts` (all homepage and navbar content, labels, testimonials, footer, FAQ)
- `components/layout/navbar.tsx` (Navbar brand label and links reflect BrewCRM)
- `app/auth/client.tsx` (All auth screens; headings, CTAs, and descriptions BrewCRM-branded)
- `app/auth/forgot-password/client.tsx` (Heading and body content for "forgot password" flow)
- `app/auth/reset-password/[token]/client.tsx` (Reset password view BrewCRM branding)
- `app/dashboard/layout.tsx` (Sidebar and shell branding set to BrewCRM, new logo)
- `components/dashboard/sidebar-nav.tsx` (Sidebar navigation: Dashboard, Customers, Loyalty, Orders, Campaigns, Settings)
- `app/dashboard/page.tsx` (Welcome text, subheading, and CTA updated for BrewCRM)
- `app/dashboard/client.tsx` (Main dashboard welcome state BrewCRM copy)
- `app/dashboard/customers/page.tsx`, `client.tsx` (Heading, empty state, CTA "Add Customer")
- `app/dashboard/loyalty/page.tsx`, `client.tsx` (Heading, empty state, CTA "Set Up Loyalty")
- `app/dashboard/orders/page.tsx`, `client.tsx` (Heading, empty state, CTA "Track First Order")
- `app/dashboard/campaigns/page.tsx`, `client.tsx` (Heading, empty state, CTA "Create Campaign")

### Key Logic Updated:
- Full homepage and landing page copy for BrewCRM’s coffee shop CRM positioning
- Auth and account flows consistently branded and messaged for coffee shop operators
- New minimal dashboard routes for core workflows (Customers, Loyalty, Orders, Campaigns)
- Dashboard shell, nav, and empty states personalized for BrewCRM
- Owner contact set as Aaron Mason (aaron@bidx.ai) for all contact and email forms

---  
**No changes to backend/database.**  
This build is ready for demonstration and further foundation features.