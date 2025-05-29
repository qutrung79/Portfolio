export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const siteConfig: SiteConfig = {
  name: "QA Automation Engineer",
  title: "QA Automation Portfolio",
  description: "I build robust test automation frameworks and ensure quality in software delivery.",
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:contact@example.com"
  }
};

export default siteConfig;
