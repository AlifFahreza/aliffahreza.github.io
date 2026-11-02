/*
  QA PROJECTS — edit this file to publish YOUR testing deliverables.

  HOW IT WORKS
  1. Complete independent testing on a public demo app or your own app.
  2. Put your own files in assets/files/projects/<slug>/.
  3. Update an entry below; set published: true after checking your content.
  4. Every item in artifacts[] automatically gets an open/download link.

  Required: id (unique), category ("QA" or "Development"), published,
  title, description, year, symbol, theme, tags.
  QA optional fields: application, coverage, approach, outcome, artifacts[].
  Artifact object: { label: "Test Cases", url: "assets/files/projects/.../test-cases.xlsx" }.
  "outcome" must contain real results, NOT invented execution statistics.
  Draft projects (published: false) never appear on the public site.
  Never publish company/client test cases, screenshots, logs, or credentials.
*/
window.PORTFOLIO_PROJECTS = [
  // --------- DRAFT QA CASE STUDIES — NOT VISIBLE UNTIL PUBLISHED ---------
  {
    id: "demo-web-qa", published: false, category: "QA",
    title: "E-commerce website manual testing", year: "YEAR", symbol: "WEB", theme: "blue",
    description: "Replace with your real application, test scope, and results after performing the tests.",
    application: "Enter public demo application name and URL in artifacts if appropriate",
    coverage: "Example: login, cart, checkout, required-field validation",
    approach: "Example: functional, negative, boundary, regression",
    outcome: "Add verified execution summary only when testing is complete",
    tags: ["Web QA", "Manual Testing", "Functional Testing"],
    artifacts: [
      // { label: "Test scenarios · XLSX", url: "assets/files/projects/demo-web-qa/test-scenarios.xlsx" },
      // { label: "Test cases & results · XLSX", url: "assets/files/projects/demo-web-qa/test-cases.xlsx" },
      // { label: "Issue log · XLSX", url: "assets/files/projects/demo-web-qa/issue-log.xlsx" },
      // { label: "Test report · PDF", url: "assets/files/projects/demo-web-qa/test-report.pdf" },
      // { label: "Evidence · PNG", url: "assets/files/projects/demo-web-qa/screenshots/evidence-01.png" }
    ]
  },
  {
    id: "demo-android-qa", published: false, category: "QA",
    title: "Android application testing", year: "YEAR", symbol: "APP", theme: "olive",
    description: "Replace after testing a legitimate demo or open-source Android app.",
    application: "App name / version", coverage: "App features tested",
    approach: "Testing methods used", outcome: "Verified result summary",
    tags: ["Android", "Manual Testing"], artifacts: []
  },
  {
    id: "demo-api-qa", published: false, category: "QA",
    title: "REST API testing", year: "YEAR", symbol: "API", theme: "dark",
    description: "Replace after testing a public API or your own safe simulation.",
    application: "API name / environment", coverage: "Endpoints and behaviors tested",
    approach: "Postman, positive and negative validation", outcome: "Verified result summary",
    tags: ["API Testing", "Postman"], artifacts: []
  },
  // --------- VERIFIED PUBLIC DEVELOPMENT REPOSITORIES ---------
  {
    id: "disiplinify", published: true, category: "Development",
    title: "Disiplinify", year: "2024", symbol: "D/", theme: "blue",
    description: "Academic web development project: a school discipline information system using the SMART decision-support method. Presented as development work, not a QA testing case study.",
    tags: ["Web Development", "Academic Project"],
    links: [{label: "View repository ↗",url: "https://github.com/AlifFahreza/Disiplinify"}]
  },
  {
    id: "pageanary", published: true, category: "Development",
    title: "Pageanary", year: "Earlier project", symbol: "P/", theme: "sand",
    description: "Earlier Android application development project. Included to show software development background, not formal QA testing results.",
    tags: ["Android Development", "Mobile"],
    links: [{label: "View repository ↗",url: "https://github.com/AlifFahreza/Pageanary"}]
  }
];
