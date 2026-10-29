/*
  ADD / UPDATE PROJECTS IN THIS FILE ONLY.

  Supported fields:
  id          unique identifier
  published   true = visible, false = draft (hidden from public site)
  category    "QA", "Development", or "Resource"
  title       project title
  description 1-2 sentence description (avoid confidential project details)
  year        year, e.g. "2026" or "2023"
  symbol      large decorative text like "QA", "↗", "◆"
  theme       "dark", "olive", "blue", "sand"
  tags        array of short labels
  links       array of { label: "...", url: "..." } links to repositories, public case studies, PDFs, Excel, etc.

  File links use relative paths, e.g.:
  { label: "Test cases (XLSX) ↓", url: "assets/files/projects/my-web-qa/test-cases.xlsx" }

  Move your OWN publicly shareable test artifacts into assets/files/projects/PROJECT-NAME/.
  In-progress drafts should stay published: false until you have real test evidence.
*/
window.PORTFOLIO_PROJECTS = [
  {
    id: "qa-docs-template", published: true, category: "Resource",
    title: "QA documentation starter kit", year: "2026", symbol: "≡", theme: "olive",
    description: "A blank, reusable Excel workbook with separate sheets for test scenarios, test cases, bug reports, and test summaries. This is a template, not a completed test project.",
    tags: ["XLSX", "Blank template", "Test documentation"],
    links: [{ label: "Download workbook ↓", url: "assets/files/templates/QA_Test_Documentation_Template.xlsx" }]
  },
  {
    id: "disiplinify", published: true, category: "Development",
    title: "Disiplinify", year: "2024", symbol: "D/", theme: "blue",
    description: "A school discipline management information system developed as an academic software project using the SMART decision-support method. Shown as development work, not a QA case study.",
    tags: ["Web application", "Academic project", "Development"],
    links: [{ label: "GitHub repository ↗", url: "https://github.com/AlifFahreza/Disiplinify" }]
  },
  {
    id: "pageanary", published: true, category: "Development",
    title: "Pageanary", year: "Earlier work", symbol: "P/", theme: "sand",
    description: "An Android application project presented in the earlier development portfolio, created to support public-speaking practice. Shown as development work, not a QA case study.",
    tags: ["Android", "Java", "Development"],
    links: [{ label: "GitHub repository ↗", url: "https://github.com/AlifFahreza/Pageanary" }]
  },
  // DRAFT PROJECTS — These do NOT appear until you change published to true.
  // Replace the example copy with REAL, independent work and upload your own sanitized files.
  {
    id: "web-testing", published: false, category: "QA",
    title: "Web application manual testing", year: "Add year", symbol: "W/", theme: "blue",
    description: "Describe the public demo application, your test scope, testing approach, and actual results. Do not claim bugs or execution before testing.",
    tags: ["Functional", "Regression", "Test cases"],
    links: [
      // { label: "Test scenarios (XLSX) ↓", url: "assets/files/projects/web-testing/test-scenarios.xlsx" },
      // { label: "Test report (PDF) ↓", url: "assets/files/projects/web-testing/test-report.pdf" }
    ]
  },
  {
    id: "android-testing", published: false, category: "QA",
    title: "Android app manual testing", year: "Add year", symbol: "A/", theme: "olive",
    description: "Add a testing project using an open-source or public demo app and your own test evidence.",
    tags: ["Android", "Exploratory", "Bug reporting"], links: []
  },
  {
    id: "api-testing", published: false, category: "QA",
    title: "API testing case study", year: "Add year", symbol: "API", theme: "dark",
    description: "Describe a public/simulated API, test data, request/response validation, and results.",
    tags: ["Postman", "API validation", "Negative testing"], links: []
  }
];
