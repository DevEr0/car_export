# Managing your website — quick guide

Your site now has a built-in admin panel. Open it at:

    https://<your-github-pages-url>/admin.html

(It's part of the site, so there's nothing extra to host. It is set to
`noindex`, so Google won't list it.)

> **Your password is `changeme` — change it now.** Open the admin → **Publish**
> tab → **Security** → type a new password → **Set password** → **Publish**.
> Until you publish, the new password isn't live for everyone.

> **If the admin is stuck on "Loading…" or shows "Admin can't start":** the
> `data.js` file isn't sitting next to `admin.html`. Deploy the **whole site**
> (the zip / the whole repo), not `admin.html` by itself.

---

## The one thing to understand

This is a **static site** (GitHub Pages), so there is no server saving your
changes. The admin gives you two save modes:

1. **Preview on this device** — your edits show on the live site instantly,
   but **only in the browser you're using**. Visitors don't see them. Use this
   to check your work.

2. **Publish** — makes changes public for **everyone**. This works by saving
   the `data.js` file back into your GitHub repo. Two ways (Publish tab):
   - **Option A — Download & upload:** click *Download data.js*, then on
     github.com open `data.js`, click the ✏️ pencil, paste, and *Commit*.
     GitHub Pages goes live in ~1 minute. (No setup, works for anyone.)
   - **Option B — Commit directly:** paste a GitHub token once and click
     *Publish to GitHub*. One click from then on.

> If you only Preview and never Publish, the public site stays unchanged.

---

## What you can edit in the admin

- **Cars** — add / edit / delete / reorder. Upload a photo (auto-resized) or
  point to a file/URL, set name (EN + 中文), year, category, price text, tags,
  and whether it appears in the homepage slider (★).
- **Homepage text** — hero headline, section headings and intros (EN + 中文).
- **Contact & social** — WhatsApp number, Instagram, location. These update the
  WhatsApp buttons and contact details everywhere on the site.
- **Categories** — the filter buttons on the “All cars” page.

---

## Option B: creating a GitHub token (one time)

1. github.com → your photo (top-right) → **Settings**
2. **Developer settings** → **Personal access tokens** → **Fine-grained tokens**
3. **Generate new token**. Repository access → only `car_export`.
4. Permissions → **Contents: Read and write**.
5. Generate, copy it, paste into the admin's token field. Tick *Remember* if it's
   your own device. Anyone with this token can edit the repo — keep it private.

---

## Editing data.js by hand (optional / advanced)

All content lives in **data.js**. You can still edit it directly in a text
editor — each car is a block in the `cars` list, and homepage wording is in the
`content` block. Just keep the `/* __DATA_START__ */ … /* __DATA_END__ */`
markers intact (the admin uses them to rewrite the file).

## Adding real photos

Drop image files anywhere in the repo (e.g. `/img/cars/`) and set a car's image
to that path (e.g. `img/cars/my-car.jpg`) — or just upload through the admin,
which embeds the photo for you. The placeholder SVGs in `/img/cars/` can be
replaced the same way.

---

## Important
Whenever the site renders, make sure **data.js sits next to index.html** in the
repo (it does now). Deploy the **whole repository** — the GitHub Action already
does this on every push to `main`.
