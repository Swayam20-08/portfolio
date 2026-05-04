import SectionTitle from './SectionTitle';

const projects = [
  {
    title: 'Mini E-Commerce',
    description:
      'A responsive mini e-commerce website with product listings, cart management, and a simple checkout flow.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/mini-ecommerce.png',
    repo: 'https://github.com/Swayam20-08/mini-e-commerce',
  },
  {
    title: 'Ferrari Redesign',
    description:
      'A fully responsive Ferrari website redesign focused on modern UI/UX, smooth interactions, and brand consistency.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/ferrari-redesign.png',
    repo: 'https://github.com/Swayam20-08/ferrari-redesign',
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle label="— featured work —" title="Projects" />
        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card reveal ${index % 2 === 1 ? 'project-card-reverse' : ''}`}
              data-animate="true"
              data-delay={index}
              key={project.title}
            >
              <div className="project-image" aria-hidden="true">
                {project.image ? (
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                ) : (
                  <span>{project.imageLabel}</span>
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {project.repo ? (
                  <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
                    View Repository
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
