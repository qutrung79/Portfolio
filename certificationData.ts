export interface Certification {
  title: string;
  date: string;
  organization?: string;
}

const certificationData: Certification[] = [
  {
    title: "Continuous Integration and Continuous Delivery (CI/CD)",
    date: "06/2023"
  },
  {
    title: "Computational Thinking for Problem Solving Skills & Abilities",
    date: "09/2021"
  },
  {
    title: "Evidence and Data Collection for Problem Solving",
    date: "04/2020"
  }
];

export default certificationData;
