export interface Skill {
  category: string;
  items: string[];
}

const skillsData: Skill[] = [
  {
    category: "Languages",
    items: ["Java", "TypeScript", "Groovy", "Python"]
  },
  {
    category: "Frameworks",
    items: ["Selenium", "TestNG", "Mocha", "WebdriverIO"]
  },
  {
    category: "Tools",
    items: ["Postman", "Rest Assured", "Jenkins", "Jira", "Grafana", "Datadog", "BitBucket", "GitLab"]
  },
  {
    category: "Methodologies",
    items: ["Agile", "BDD", "E2E Testing", "CI/CD", "Kanban"]
  }
];

export default skillsData;
