# Priestley practice — search & ads report

A static page for Joe. No database, no logins, no server code. The page reads
everything from `data.js`.

## Weekly update

1. Open the Google Form responses sheet, look at anything new.
2. Edit `data.js` — that's the only file that changes.
   - Add enquiry rows to `enquiries` (no names: date, how, outcome).
   - Update the matching row in `months`.
   - Update `ads` when there are figures.
   - Rewrite `headline` — plain English, what changed and what it means.
   - Add anything done to `activity`.
   - Update `updated` and `period`.
3. `git add -A && git commit -m "Update report" && git push`

Live within a minute or so.

## Why noindex

`robots.txt` and the `<meta name="robots">` tag keep the page out of search
results. GitHub Pages URLs are public, so this stops Joe's figures turning up
under a search for the practice. It is not a password — don't put client names
or anything identifiable in here. Counts and outcomes only.

## First-time setup

    git init
    git add -A
    git commit -m "Initial report"
    git branch -M main
    git remote add origin https://github.com/<you>/<repo>.git
    git push -u origin main

Then in the repo: Settings → Pages → Source: `main`, folder `/ (root)`.
