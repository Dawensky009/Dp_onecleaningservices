

## Plan: Add "Get a Quote" Buttons, Update "Book Now", and Scroll-to-Top on Navigation

### Changes

**1. Add "Get a Quote" button under each service block** (`src/pages/Services.tsx`)
- After the feature list in each of the 5 service detail sections, add a styled button
- Clicking it smooth-scrolls down to the Pricing Tiers section
- Add `id="pricing"` to the Pricing Tiers section for the scroll target

**2. Change "Book Now" navbar button to scroll to pricing** (`src/components/Navbar.tsx`)
- If already on `/services`, smooth-scroll to `#pricing`
- If on another page, navigate to `/services#pricing`
- Applies to both desktop and mobile nav

**3. Scroll to top on route change** (`src/App.tsx`)
- Add a `ScrollToTop` component that listens to route changes and scrolls to the top of the page
- Exception: if the URL has a hash (like `#pricing`), scroll to that element instead

### Files modified
- `src/pages/Services.tsx` — add `id="pricing"` to pricing section, add "Get a Quote" button after each service's feature list
- `src/components/Navbar.tsx` — change "Book Now" to navigate/scroll to pricing section
- `src/App.tsx` — add ScrollToTop component for page transitions

