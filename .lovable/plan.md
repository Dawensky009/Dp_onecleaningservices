

## Plan: Merge Services & Pricing into One Page

### Problem
The Services page feels empty on its own, and having two separate pages splits related content unnecessarily. Combining them creates a richer, more compelling single page.

### New page structure: "Services & Pricing" (at `/services`)

The merged page will flow as follows:

1. **Hero** — "Professional Cleaning Services" with the Palm Beach County / Commercial badges from Pricing
2. **Service Details** — The 5 alternating image+text service blocks (existing Services content)
3. **Pricing Tiers** — The 3 pricing cards (Essential / Signature / Estate) from Pricing
4. **Quick Estimate + Hourly Rate + Price Factors** — The two-column grid from Pricing
5. **Find Your Perfect Plan Quiz** — The interactive quiz from Services
6. **CTA** — "Ready for a Spotless Space?" card with quote button

### Navigation changes
- Remove "Pricing" from the navbar — keep only Home / Services / Contact
- Redirect `/pricing` to `/services` so old links still work

### Files modified
- `src/pages/Services.tsx` — merge all Pricing content into this page
- `src/components/Navbar.tsx` — remove "Pricing" nav item
- `src/App.tsx` — remove Pricing route, add redirect from `/pricing` to `/services`
- `src/pages/Pricing.tsx` — delete (no longer needed)

### What stays the same
- All existing styling, glassmorphism cards, animations
- All pricing data, service details, quiz logic
- Footer links (will update if they reference Pricing)

