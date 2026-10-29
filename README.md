# Alif Fahreza — QA Engineer Portfolio

A clean, responsive portfolio for **general QA Engineer roles** with payment-system expertise as a differentiator. Designed for **GitHub Pages** with **no build step, no package installation, no database, and no framework**.

## What's inside

- `index.html` — semantic single-page website and section layout
- `assets/css/styles.css` — responsive styling
- `assets/js/app.js` — project cards, filters, skills, experience, and mobile navigation
- `data/site.js` — **EDIT THIS** to update profile, contact links, skills and experience
- `data/projects.js` — **EDIT THIS** to add projects, files, and public case studies
- `assets/files/templates/QA_Test_Documentation_Template.xlsx` — blank QA spreadsheet with 4 tabs
- `assets/files/resume/Alif_Fahreza_QA_Engineer_CV.docx` — the latest CV from this conversation
- `assets/files/projects/` — add your own test reports, scripts, evidence, etc.
- `.nojekyll` — tells GitHub Pages to serve the directory as plain static files

## Publish to your existing GitHub Pages website

Your site currently uses `https://aliffahreza.github.io/`.

1. **Back up your existing GitHub Pages repository** (or work on a separate branch).
2. Download and extract the supplied ZIP. Open the `alif-qa-portfolio` folder.
3. In your GitHub Pages repository, **remove obsolete old site files** such as `resume.html`, `projects.html`, `contact.html`, and their unused assets **after backing them up**. Then copy the extracted files (especially `index.html`, `assets/`, and `data/`) into the repository root. Use your actual Pages repository name.
4. Commit and push the changes to the configured publishing branch, usually `main`.
5. In GitHub, visit **Settings → Pages** and set **Deploy from a branch → main → / (root)**, if it is not configured already.
6. Visit your Pages URL. GitHub Pages will publish the static files after deployment.

> Important: upload **the contents of this folder**, not an extra nested folder, otherwise `index.html` won't sit at your website's root. This website replaces the old homepage; remove obsolete HTML pages and unused assets after backing them up if you do not want the previous website to remain publicly accessible.

### Local preview

From inside the project folder:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`. You can also open `index.html` directly in a browser, but the local server is closer to GitHub Pages.

## Customize the profile

Open **`data/site.js`**, and update the values you want:

```js
window.PORTFOLIO_SITE = {
  name: "Muhammad Alif Fahreza Al Rafi",
  role: "QA Engineer",
  email: "your@email.com",
  linkedin: "https://linkedin.com/in/your-handle",
  github: "https://github.com/your-handle",
  resume: "assets/files/resume/Alif_Fahreza_QA_Engineer_CV.docx",
  // ...
};
```

In the same file you can edit `skills`, `experiences`, `heroIntro`, and `aboutParagraphs` without touching HTML/CSS. Most long-lived design copy (large headlines and section titles) lives in `index.html`.

### Change colors or layout

Open `assets/css/styles.css`. The `:root` CSS variables at the top control the color palette (`--ink`, `--paper`, `--accent`, etc.).

## Add your first QA project (Excel / PDF / reports)

1. Test a public demo application, or your own application, and complete your **own** QA documentation.
2. Create a project directory, for example:
   `assets/files/projects/saucedemo-web-qa/`
3. Put files in it, such as:
   - `test-scenarios.xlsx`
   - `test-cases.xlsx`
   - `bug-report.pdf`
   - `test-summary-report.pdf`
   - `screenshots/checkout-validation.png`
4. Open **`data/projects.js`**. You can either edit a pre-written draft (`published: false`) and switch it to `true`, or add a new project object:

```js
{
  id: "saucedemo-qa",
  published: true,
  category: "QA",
  title: "E-commerce Web Manual Testing",
  year: "2026",
  symbol: "QA",
  theme: "blue",
  description: "Test scope, approach, and real findings from an independently executed public demo application.",
  tags: ["Manual QA", "Functional", "Negative", "Web"],
  links: [
    { label: "Test scenarios (XLSX) ↓", url: "assets/files/projects/saucedemo-web-qa/test-scenarios.xlsx" },
    { label: "Test cases (XLSX) ↓", url: "assets/files/projects/saucedemo-web-qa/test-cases.xlsx" },
    { label: "Test report (PDF) ↓", url: "assets/files/projects/saucedemo-web-qa/test-summary-report.pdf" },
    { label: "Evidence (PNG) ↗", url: "assets/files/projects/saucedemo-web-qa/screenshots/checkout-validation.png" }
  ]
},
```

**Example content above is explanatory only, not a completed or verified project.** Do not publish an example as actual work until you have tested it yourself. All draft QA cards in the shipped `data/projects.js` start with `published: false`; the public site hides them.

### Link to a separate GitHub repo

Instead of uploading a large file to this site, add a link to another public repository:

```js
{ label: "View complete QA case study ↗", url: "https://github.com/YOUR_HANDLE/YOUR_QA_REPO" }
```

### How project filters work

`category` must be one of:

- `QA` — independent testing case studies
- `Development` — earlier development projects
- `Resource` — reusable templates and learning materials

`theme` can be `dark`, `olive`, `blue`, or `sand`. Cards are automatically generated, including links and labels. `published: false` keeps in-progress projects hidden from the live website.

## Blank QA workbook

`QA_Test_Documentation_Template.xlsx` contains:

| Worksheet | Purpose |
|---|---|
| Test Scenarios | Plan scenarios and coverage |
| Test Cases | Record test steps, data, expected/actual results, and execution status |
| Bug Reports | Document reproduction steps, severity, expected/actual behavior |
| Test Summary | Record environment, execution counts, and a factual conclusion |

The workbook intentionally has **blank actual results** and **no invented bug findings**. Make a copy for each project; do not overwrite the starter template unless you want to.

## Privacy, accuracy, and permissions

- Never publish an employer's original test cases, FSD/BRD, internal screenshots, client names, host logs, customer data, tokens, credentials, or confidential transaction details without explicit authorization.
- Use public demo apps, your own simulators, and synthetic data. Redacting a confidential file doesn't automatically make it public.
- Check project results and claims against your own records; a portfolio is not a place for invented test evidence.
- The included CV document contains your public contact information, **including your phone number**. If you don't want that downloadable from a public website, delete/replace it and update both resume links in `data/site.js`. You can replace it with a public-safe PDF or DOCX.
- Claims including **2+ years** and **1,000+ test cases**, and prior internship contributions, were adapted from the latest CV. Review them for accuracy before publishing. The site intentionally avoids disclosing internal dashboard data or confidential customer project details.
- Existing public GitHub repositories may contain their own sensitive data. Audit repositories before linking them or keeping them public.

## Accessibility & maintenance

The website includes semantic section headings, keyboard-visible focus, skip navigation, reduced-motion support, and responsive navigation. Projects are rendered as text via `textContent`, not injected as raw HTML.

There is no contact form backend to maintain. Email opens the user's mail app and external social links go to their respective services.

To test updates locally, use the HTTP server command above and review the site on desktop/mobile. Use Chrome's developer tools to verify that each linked asset returns successfully.
