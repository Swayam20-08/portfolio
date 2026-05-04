import SectionTitle from './SectionTitle';

const achievements = [
  {
    title: 'Dinar Venture',
    description: 'Worked as a Web Development Intern at Dinar Venture, contributing to the design and development of dynamic and responsive websites.',
    certificate: '/certificates/dinar-venture-certificate.pdf',
  },
  {
    title: 'Future Intern',
    description: 'Built and deployed full-stack web applications using the MERN stack, delivering scalable and user-friendly solutions.',
    certificate: '/certificates/future-intern-certificate.pdf',
  },
  {
    title: 'District Level Football Player',
    description: 'Went to Panchmahal for the matches from were I learned interacting and leadership qualitys',
  },
];

function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionTitle label="— milestones —" title="Achievements" />
        <div className="achievement-grid">
          {achievements.map((item, index) => (
            <article className="achievement-card reveal" data-animate="true" data-delay={index} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.certificate ? (
                <a className="achievement-link" href={item.certificate} target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
