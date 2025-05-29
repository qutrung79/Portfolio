export interface Experience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
  technicalSkills: string[];
}

const experienceData: Experience[] = [
  {
    title: "Automation QE",
    company: "Financial Technology Solutions and Platform",
    duration: "07/2023 – Present",
    responsibilities: [
      "Analyzed requirements, designed, executed, and updated test plans, scenarios, scripts, data, and system tests.",
      "Developed and maintained API automation tests using Postman, RestAssured, and integrated into the CI/CD pipeline (Jenkins).",
      "Created detailed test plans, test cases, and test summary reports to track test coverage.",
      "Migrated test cases from local execution to Jira Xray for better traceability.",
      "Conducted BDD and E2E testing to validate business logic and user workflows.",
      "Handled infrastructure tasks to set up the QA testing environment.",
      "Execute Zero-Downtime Testing as an Integral Step in Every Release Cycle."
    ],
    technicalSkills: [
      "Frameworks: Mocha, TestNG, Selenium, WebdriverIO",
      "Languages: Java, TypeScript, Groovy",
      "Tool: Postman, Rest Assured, Jenkins, Jira, Grafana, Datadog"
    ]
  },
  {
    title: "CI Monitoring Engineer",
    company: "Global Security Web Application",
    duration: "10/2022 – 6/2023",
    responsibilities: [
      "Monitored integration, build, and test CI infrastructure.",
      "Checked each stage for failures, debugged, reported issues, and implemented fixes.",
      "Managed orchestration of test environments (AWS/VMware).",
      "Handled enhancement tasks using Kanban methodology."
    ],
    technicalSkills: [
      "Frameworks: Selenium",
      "Languages: Python, Groovy",
      "Tool: Jenkins, InfluxDB, Grafana, BitBucket, Jira"
    ]
  },
  {
    title: "Automation and Manual Tester",
    company: "Essential Web Application Project",
    duration: "02/2022 – 12/2022",
    responsibilities: [
      "Analyzed requirements, product backlog items, and user stories to create test plans, scenarios, and cases.",
      "Developed and executed automated software test plans, cases, and scripts.",
      "Wrote and executed automation scripts for regression testing.",
      "Integrated automation scripts with CI and analyzed results and defects to improve test coverage.",
      "Followed Agile methodology, participating in sprints, daily stand-ups, and sprint retrospectives to adapt to project needs and improve collaboration."
    ],
    technicalSkills: [
      "Framework: Selenium, TestNG",
      "Language: Java",
      "Tool: GitLab, Jenkins"
    ]
  }
];

export default experienceData;
