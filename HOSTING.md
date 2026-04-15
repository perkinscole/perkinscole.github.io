# Hosting Your Site, Step by Step

This guide walks you through publishing your site to **GitHub Pages** (free, integrates with your existing GitHub, doubles as a portfolio piece). I recommend this path since you already have a GitHub profile.

If you'd rather use Netlify (simpler, drag-and-drop), jump to the bottom.

---

## Before you start: compress the videos

Your `care-garden-1.mp4` is **566 MB**, way too big for the web. Nobody will wait for it to load, and GitHub Pages has a 100 MB per-file limit anyway.

1. Download **HandBrake** (free): https://handbrake.fr
2. Open `care-garden-1.mp4` in HandBrake
3. Pick the preset: **Web > Gmail Large 3 Minutes 720p30**
4. Click **Start Encode**
5. Replace the original file with the compressed one (should be ~20, 50 MB)
6. Do the same for `care-garden-2.mov` and `vex-demo-2.mov` if they're over ~20 MB

---

## GitHub Pages, Step by Step

### 1. Create the repo

1. Go to https://github.com/new
2. **Repository name**: `cole-perkins-site` (or whatever you want, this becomes part of your URL)
3. **Description**: "Personal website"
4. Set to **Public**
5. Leave everything else unchecked (no README, no .gitignore needed)
6. Click **Create repository**

### 2. Upload your files

Easiest path (no command line):

1. On the new empty repo page, click **uploading an existing file**
2. Drag the entire contents of your `personal website` folder into the browser:
   - `index.html`
   - `about.html`
   - `portfolio.html`
   - `work-student.html`, `work-curriculum.html`, `work-apps.html`, `work-special.html`, `work-clubs.html`
   - `cv.html`
   - `contact.html`
   - `guess-the-teacher.html`
   - `style.css`
   - the whole `images/` folder
3. Scroll down, **Commit changes**

### 3. Turn on GitHub Pages

1. In your repo, click **Settings** (top nav)
2. In the left sidebar, click **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**, pick `main` and `/ (root)`, then click **Save**
5. Wait 1, 2 minutes
6. Refresh the page, you'll see "Your site is live at `https://perkinscole.github.io/cole-perkins-site/`"

That's your URL. Share it, put it on your resume, pin the repo to your profile.

### 4. (Optional) Custom domain

If you want `coleperkins.com` instead of the GitHub URL:

1. Buy a domain from Namecheap, Porkbun, or Cloudflare (~$10, 15/year)
2. In the domain registrar's DNS settings, add these records:
   - `A` record pointing to `185.199.108.153`
   - `A` record pointing to `185.199.109.153`
   - `A` record pointing to `185.199.110.153`
   - `A` record pointing to `185.199.111.153`
   - `CNAME` record: `www` pointing to `perkinscole.github.io`
3. Back in GitHub, **Settings > Pages > Custom domain**, enter your domain and save
4. Check **Enforce HTTPS** once the certificate provisions (takes 10 minutes to a few hours)

### 5. Making updates later

Every time you want to update the site:
- Edit files locally
- In your repo on GitHub, either:
  - **Upload files** (drag-and-drop new versions), or
  - Use **GitHub Desktop** (free app, nicer workflow): https://desktop.github.com

GitHub Pages will rebuild and redeploy automatically within a minute or two.

---

## Alternative: Netlify (drag-and-drop, even easier)

If you don't want to deal with git:

1. Go to https://app.netlify.com/drop
2. Drag your entire `personal website` folder onto the page
3. Done. You'll get a URL like `curious-panda-abc123.netlify.app`
4. In Netlify's dashboard, you can rename it (e.g. `coleperkins.netlify.app`) or connect a custom domain

Netlify is slightly nicer for iteration (drag a new folder to update) but doesn't double as a public portfolio piece the way a GitHub repo does.

---

## Which do I recommend?

**GitHub Pages** if you want employers to see the repo (recommended for your job search, it's itself a portfolio artifact).

**Netlify** if you just want the easiest possible path to live.

Either way, you can always switch later, your files are the same.
