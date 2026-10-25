# FLI-IN
A responsive resource directory with a full-screen photo hero and a resource section that scrolls over it.

## Run locally
From this directory, run `python3 -m http.server 3000 --bind 0.0.0.0`.
No dependency installation, build step, credentials, or database is required.

## Photos and resources
The uploaded ZIP supplies the banner and five directory photos, optimized into local WebP files in `assets/`. The logo and More Resources photo were not present in the ZIP; the wordmark and temporary More Resources image remain. Ridge Jaco is credited for the pending logo. Photo citations are deferred at the user’s request. External Google Fonts and the remaining Unsplash placeholder require internet access; system fonts and background colors provide fallbacks.

The six directory buttons open keyboard-accessible dialogs with starter resource links. Edit the `directories` array in `app.js` to curate resources. This version has no login or user accounts.
