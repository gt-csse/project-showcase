import { type Project } from "@/schema";

// Generate structured data (JSON-LD) for projects
export function generateProjectStructuredData(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.description,
    "applicationCategory": "ResearchSoftware",
    "creator": {
      "@type": "Organization",
      "name": "Center for Scientific Software Engineering",
      "url": "https://ssecenter.cc.gatech.edu/",
      "parentOrganization": {
        "@type": "EducationalOrganization",
        "name": "Georgia Institute of Technology",
        "url": "https://gatech.edu/"
      }
    },
    "codeRepositories": project.githubUrls.join(", "),
    "programmingLanguage": extractProgrammingLanguages(project),
    "keywords": project.category.join(", "),
    "image": project.imageUrl,
    "url": `https://ssec-showcase.gatech.edu/projects/${project.id}`,
    "dateCreated": project.projectDetails.startDate,
    "dateModified": project.projectDetails.endDate,
    "license": "Various - see individual repositories",
    "operatingSystem": "Cross-platform",
    "softwareVersion": "Latest",
    "applicationSubCategory": project.projectDetails.scientificDomain
  };
}

// Generate structured data for the organization
export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    "name": "Center for Scientific Software Engineering",
    "alternateName": "CSSE",
    "url": "https://ssec-showcase.gatech.edu/",
    "logo": "https://ssec-showcase.gatech.edu/project-images/gt-logo-color.png",
    "description": "The Center for Scientific Software Engineering (CSSE) at Georgia Tech develops cutting-edge software solutions for scientific research, specializing in AI/ML, computational science, and data visualization.",
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "name": "Georgia Institute of Technology",
      "url": "https://gatech.edu/",
      "logo": "https://ssec-showcase.gatech.edu/project-images/gt-logo-color.png"
    },
    "areaServed": "Global",
    "knowsAbout": [
      "Scientific Software Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "Computational Science",
      "Data Visualization",
      "Research Software Development"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "General Inquiry",
      "url": "https://ssecenter.cc.gatech.edu/contact/"
    },
    "sameAs": [
      "https://github.com/gt-csse",
      "https://ssecenter.cc.gatech.edu/"
    ]
  };
}

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string, url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  };
}

// Helper function to extract programming languages from project technologies
function extractProgrammingLanguages(project: Project): string[] {
  const programmingLanguages: string[] = [];

  // Extract from detailedTechnologies
  if (project.detailedTechnologies) {
    Object.entries(project.detailedTechnologies).forEach(([category, techs]) => {
      if (category.toLowerCase().includes('backend') ||
        category.toLowerCase().includes('frontend') ||
        category.toLowerCase().includes('language')) {
        techs.forEach(tech => {
          const techName = typeof tech === 'string' ? tech : tech.name;
          // Common programming languages
          if (['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C', 'R', 'MATLAB', 'Go', 'Rust'].includes(techName)) {
            programmingLanguages.push(techName);
          }
        });
      }
    });
  }
  return Array.from(new Set(programmingLanguages));
}

// Generate SEO-friendly slug from project title
export function generateProjectSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}

// Generate meta description for project pages
export function generateProjectMetaDescription(project: Project): string {
  const technologies = extractProgrammingLanguages(project).slice(0, 3).join(', ');
  const domain = project.projectDetails.scientificDomain;

  return `${project.summary} Built with ${technologies} for ${domain}. Explore this innovative research project from Georgia Tech's CSSE.`;
}

// Generate keywords for project pages
export function generateProjectKeywords(project: Project): string {
  const baseKeywords = ['Georgia Tech', 'CSSE', 'Scientific Software Engineering', 'Research Project'];
  const categoryKeywords = project.category.map(cat =>
    cat.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
  );
  const techKeywords = extractProgrammingLanguages(project);

  return baseKeywords.concat(categoryKeywords, techKeywords, [project.projectDetails.scientificDomain])
    .filter(Boolean)
    .join(', ');
}
