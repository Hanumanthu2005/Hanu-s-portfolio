import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hand Cricket Game",
    description: "Relive the classic hand cricket fun in a digital way!",
    image: "/projects/hand-cricket.jpeg",
    tags: ["React", "Css"],
    demoUrl: "https://hand-cricket-game-lac.vercel.app/",
    githubUrl: "https://github.com/Hanumanthu2005/Hand-Cricket-Game",
  },
  {
    id: 2,
    title: "Rock Paper Scissors",
    description:
      "The timeless Rock-Paper-Scissors battle, reimagined for the web!",
    image: "/projects/rock-paper-scissors.jpeg",
    tags: ["React", "Css"],
    demoUrl: "https://rock-paper-scissors-game-lemon-seven.vercel.app/",
    githubUrl: "https://github.com/Hanumanthu2005/Rock-Paper-Scissors-Game",
  },
  {
    id: 3,
    title: "Quiz App",
    description:
      "A robust backend API powering dynamic quizzes with Spring Boot and PostgreSQL.",
    image: "/projects/quiz-app.jpg",
    tags: ["Java", "Springboot", "PostgreSql"],
    demoUrl: "#",
    githubUrl: "https://github.com/Hanumanthu2005/quiz-App1.1",
  },{
    id: 4,
    title: "Job Search App",
    description:
      "Connecting job seekers with opportunities through a seamless and intuitive platform.",
    image: "/projects/job-search.jpg",
    tags: ["Java", "Springboot", "MongoDB", "React"],
    demoUrl: "#",
    githubUrl: "https://github.com/Hanumanthu2005/JobSearchApp-1.0",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Hanumanthu2005"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
