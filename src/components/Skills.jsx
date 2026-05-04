import SectionTitle from './SectionTitle';

const skillCategories = [
  {
    category: 'Programming',
    items: ['JavaScript', 'Python', 'Java', 'C++'],
  },
  {
    category: 'Frontend',
    items: ['React', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    category: 'Backend & Tools',
    items: ['Node.js', 'Express', 'MongoDB', 'GitHub'],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle label="— skills stack —" title="Skills" />
       
        <div className="skills-groups">
          {skillCategories.map((group, groupIdx) => (
            <div className="skill-group reveal" data-animate="true" data-delay={groupIdx + 1} key={group.category}>
              <h3>{group.category}</h3>
              <div className="chip-grid">
                {group.items.map((skill, skillIdx) => (
                  <span
                    className="chip reveal"
                    data-animate="true"
                    data-delay={skillIdx + groupIdx + 2}
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
