# BE Wellness — bewellnessphysio.co.uk

Static rebuild of the BE Wellness site (physiotherapy, massage & Pilates, Bournemouth),
migrated from GoDaddy Website Builder. Plain HTML/CSS with no build step.

## Structure

```
index.html                    Home
about-me/index.html           About Me
massage/index.html            Massage
pilates/index.html            Pilates
patient-privacy-notice/       Patient Privacy Notice
website-privacy-policy/       Website Privacy Policy
thanks/index.html             Form success page
404.html                      Not-found page (Netlify picks this up automatically)
css/style.css                 Single stylesheet
js/main.js                    Mobile nav toggle
assets/images, assets/fonts   Self-hosted images & fonts (see CREDITS.md)
netlify.toml                  Publish dir + cache/security headers
```

Directory-style pages keep the original URLs (`/about-me`, `/massage`, …) working
with no redirect config.

## Deploy to Netlify

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. At [app.netlify.com](https://app.netlify.com): **Add new site → Import an existing project**, pick the repo.
3. Build settings: **no build command**, publish directory **`.`** (netlify.toml already sets this).
4. Deploy. Then in **Site configuration → Forms**, enable form detection and add an
   email notification to `beth@bewellnessphysio.co.uk` for the `contact` and
   `waiting-list` forms.
5. When happy, add the custom domain `bewellnessphysio.co.uk` in
   **Domain management** and point the DNS at Netlify (the GoDaddy site stays live
   until DNS moves).

## Forms

Both forms use [Netlify Forms](https://docs.netlify.com/forms/setup/) with a
honeypot field and redirect to `/thanks/`:

- `contact` — name, email, phone, message (the old site's file-attachment field was
  dropped; the free tier doesn't support uploads)
- `waiting-list` — email only (Pilates class waiting list)

## Notes

- Getty stock images from the GoDaddy site were replaced with Unsplash photos
  (license didn't transfer) — see `CREDITS.md`.
- Client testimonials ("A little love from our clients...") lived in GoDaddy's
  reviews widget and couldn't be exported. A ready-to-fill section is commented
  out in `index.html` — paste real quotes in and it's live.
- Booking buttons link to the existing external booking page: https://cal.eu/bewellness
- No cookies or trackers are used, so no cookie banner is needed.
