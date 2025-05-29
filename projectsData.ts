export interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights?: string[];
}

const projectsData: Project[] = [
  {
    title: "Financial Technology Solutions and Platform",
    description: "Comprehensive QA automation framework for financial technology platform",
    technologies: ["Java", "TypeScript", "Postman", "RestAssured", "Jenkins", "Jira Xray"],
    highlights: [
      "Developed end-to-end API automation test suite",
      "Implemented zero-downtime testing methodology",
      "Integrated test automation into CI/CD pipeline"
    ]
  },
  {
    title: "Global Security Web Application",
    description: "CI monitoring and infrastructure management for security application",
    technologies: ["Python", "Groovy", "Selenium", "Jenkins", "AWS", "VMware"],
    highlights: [
      "Orchestrated test environments in cloud infrastructure",
      "Implemented monitoring dashboards with Grafana",
      "Streamlined build failure detection and resolution"
    ]
  },
  {
    title: "Essential Web Application Project",
    description: "Test automation framework for web application",
    technologies: ["Java", "Selenium", "TestNG", "GitLab", "Jenkins"],
    highlights: [
      "Created regression test suite with high coverage",
      "Implemented Agile testing methodologies",
      "Improved test reporting and defect tracking"
    ]
  }
];

export default projectsData;
