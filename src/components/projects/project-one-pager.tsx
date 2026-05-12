import { parseTextWithLinks } from "@/lib/utils";
import { type Project } from "@/schema";

interface ProjectOnePagerProps {
  project: Project;
}

export default function ProjectOnePager({ project }: ProjectOnePagerProps) {
  return (
    <div className="space-y-6">
      {/* Screenshots */}
      {project.screenshots &&
        project.screenshots.map((screenshot, index) => (
          <div key={index}>
            <h3 className="text-[var(--gt-navy)] text-xl font-semibold mb-4">
              {index === 0 ? "Project Visualization" : `Additional Visualization ${index + 1}`}
            </h3>
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <img src={screenshot.url} alt={screenshot.alt} className="w-full" />
              <div className="p-3 bg-gray-50 text-sm text-gray-600">{screenshot.caption}</div>
            </div>
            {screenshot.description && (
              <p
                className="mt-4 text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: parseTextWithLinks(screenshot.description)
                }}></p>
            )}
          </div>
        ))}

      {/* Impact */}
      {project.impact && (
        <div>
          <h3 className="text-[var(--gt-navy)] text-xl font-semibold mb-4">Impact</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {project.impact.map((impact, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: parseTextWithLinks(impact) }}></li>
            ))}
          </ul>
        </div>
      )}

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="bg-linear-to-r from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-200">
          <div className="text-[var(--gt-navy)] text-xl pb-2 font-semibold mb-4 flex items-center">
            <span className="w-2 h-6 bg-[var(--gt-gold)] rounded-full mr-3"></span>
            Metrics
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-xs border border-gray-100 hover:shadow-md transition-shadow">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">{metric.label}</p>
                <p className="text-lg font-semibold text-[var(--gt-navy)]">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technologies */}
      {project.detailedTechnologies && (
        <div className="bg-linear-to-r from-gray-50 to-blue-50 pb-6 px-6 rounded-lg border border-gray-200">
          <div className="text-[var(--gt-navy)] text-xl pb-2 pt-4 font-semibold mb-3 flex items-center">
            <span className="w-2 h-6 bg-[var(--gt-gold)] rounded-full mr-3"></span>
            Technologies
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {Object.entries(project.detailedTechnologies).map(
              ([categoryKey, technologies], index) => {
                if (!technologies || technologies.length === 0) return null;

                // Define color scheme for each category
                const colorSchemes = [
                  {
                    dot: "bg-blue-500",
                    bg: "bg-blue-100",
                    text: "text-blue-800"
                  },
                  {
                    dot: "bg-green-500",
                    bg: "bg-green-100",
                    text: "text-green-800"
                  },
                  {
                    dot: "bg-purple-500",
                    bg: "bg-purple-100",
                    text: "text-purple-800"
                  },
                  {
                    dot: "bg-orange-500",
                    bg: "bg-orange-100",
                    text: "text-orange-800"
                  },
                  { dot: "bg-red-500", bg: "bg-red-100", text: "text-red-800" },
                  {
                    dot: "bg-yellow-500",
                    bg: "bg-yellow-100",
                    text: "text-yellow-800"
                  },
                  {
                    dot: "bg-pink-500",
                    bg: "bg-pink-100",
                    text: "text-pink-800"
                  },
                  {
                    dot: "bg-indigo-500",
                    bg: "bg-indigo-100",
                    text: "text-indigo-800"
                  }
                ];

                const colorScheme = colorSchemes[index % colorSchemes.length];

                // Format category name for display
                const formatCategoryName = (key: string) => {
                  switch (key) {
                    case "cicd":
                      return "CI/CD";
                    case "auth":
                      return "Auth & Collaboration";
                    case "dataFormats":
                      return "Data Formats";
                    case "HPCtools":
                      return "HPC Tools";
                    default:
                      return key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase());
                  }
                };

                return (
                  <div
                    key={categoryKey}
                    className="bg-white pb-4 px-4 rounded-lg shadow-xs border border-gray-100">
                    <div className="font-semibold text-[var(--gt-navy)] my-3 flex items-center">
                      <span className={`w-3 h-3 ${colorScheme.dot} rounded-full mr-2`}></span>
                      {formatCategoryName(categoryKey)}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, techIndex) => {
                        // Handle both string and object formats
                        if (typeof tech === "string") {
                          return (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 ${colorScheme.bg} ${colorScheme.text} rounded-full text-sm font-medium`}>
                              {tech}
                            </span>
                          );
                        } else if (
                          tech &&
                          typeof tech === "object" &&
                          "name" in tech &&
                          "url" in tech
                        ) {
                          return (
                            <a
                              key={techIndex}
                              href={tech.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`px-3 py-1 ${colorScheme.bg} ${colorScheme.text} rounded-full text-sm font-medium hover:opacity-80 transition-opacity cursor-pointer`}>
                              {tech.name}
                            </a>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}

      {/* References Section */}
      {project.references && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[var(--gt-navy)] mb-4 flex items-center">
            <span className="w-3 h-3 bg-[var(--gt-gold)] rounded-full mr-3"></span>
            References
          </h3>
          <div className="space-y-2">
            {project.references.map((reference, index) => (
              <p key={index} className="text-gray-700 text-sm leading-relaxed">
                {index + 1}. {reference}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
