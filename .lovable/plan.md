

## Plan: Add Real Pricing to the Pricing Page

### What changes

Update `src/pages/Pricing.tsx` to display actual price ranges while keeping the luxury glassmorphism design:

**1. Update the three tiers with price ranges:**
- **Essential (Standard Clean):** "From $120/visit" with note "2–3 bed / 2 bath"
- **Signature (Deep Clean):** "From $180/visit" with note "Same home size"  
- **Estate (Move-In/Out & Premium):** "From $200/visit" with note "Full property"

**2. Add a "Quick Estimate" section** below the tiers — a styled table/grid showing approximate pricing by bedroom count:
- 1 bedroom → $100–$140
- 2 bedrooms → $130–$180
- 3 bedrooms → $150–$220
- 4+ bedrooms → $180–$300

**3. Add an "Hourly Rate" callout:** $20–$30/hr per person

**4. Update the "How We Price" section** to list what affects the price: home size, cleanliness level, pets, frequency, extras (fridge, oven, windows)

**5. Add "Serving Palm Beach County" badge** and mention commercial cleaning availability

**6. Keep the "Get a Free Quote" CTA** on each tier — prices shown as starting ranges, not fixed

### Files modified
- `src/pages/Pricing.tsx` — all changes in this single file

