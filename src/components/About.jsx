import SectionTitle from './SectionTitle';

const stats = [
  { label: 'Projects Built', value: '3' },
  { label: 'CGPA', value: '7.86' },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle label="— about me —" title="About" />
        <div className="about-grid">
          <div className="avatar-block reveal" data-animate="true">
            <div className="avatar-circle">SG</div>
          </div>
          <div className="about-content reveal" data-animate="true" data-delay="1">
            <p>
              Hello! I'm Swayam Goradiya, an aspiring software developer who enjoys crafting intuitive and impactful digital solutions.

I’m currently a 3rd-year Information Technology student at the Institute of Advanced Research. I have a strong inclination toward logical thinking and problem-solving, which naturally draws me to subjects like mathematics and physics. I enjoy understanding how technology works at a deeper level and love building things step by step with clarity and precision.
</p> <p>

I have a growing passion for full-stack development and enjoy working with modern technologies to create efficient and well-structured applications. I prefer simplicity in design, but I always aim to make my work clean, impressive, and meaningful. Exploring new tools and refining my work until it feels just right is something I truly enjoy.
</p><p>

Beyond coding, I am passionate about sports—especially cricket, and I’ve represented my college in inter-college tournaments. This experience has helped me develop discipline, teamwork, and focus. I also love music and enjoy playing instruments like the guitar and flute, which keeps me creative and balanced.
            </p>
            <blockquote>
              "Great products are built at the intersection of curiosity, consistency, and craft."
            </blockquote>
            <div className="stat-pills">
              {stats.map((stat, index) => (
                <div className="pill-card reveal" data-animate="true" data-delay={index + 2} key={stat.label}>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
