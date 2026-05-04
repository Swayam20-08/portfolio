import { useEffect, useState } from 'react';

const roles = ['IT Student', 'Web Developer', 'Problem Solver'];

function Home() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isDoneTyping = text === currentRole;
    const isDoneDeleting = text === '';

    const timeout = setTimeout(
      () => {
        if (!isDeleting && isDoneTyping) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && isDoneDeleting) {
          setIsDeleting(false);
          setRoleIndex((idx) => (idx + 1) % roles.length);
          return;
        }

        setText((value) =>
          isDeleting ? currentRole.slice(0, value.length - 1) : currentRole.slice(0, value.length + 1)
        );
      },
      isDoneTyping ? 1300 : isDeleting ? 60 : 110
    );

    return () => clearTimeout(timeout);
  }, [text, roleIndex, isDeleting]);

  return (
    <section id="home" className="section hero-section">
      <div className="container hero-content">
        <p className="hero-pretitle reveal" data-animate="true">
          "Code is the closest thing we have to building ideas at the speed of thought."
        </p>
        <h1 className="hero-name reveal" data-animate="true" data-delay="1">
          Swayam Goradiya
        </h1>
        <p className="hero-role reveal" data-animate="true" data-delay="2">
          <span>{text}</span>
          <span className="caret" />
        </p>
        <div className="cta-row reveal" data-animate="true" data-delay="3">
          <a href="#achievements" className="btn btn-primary">
            View Work
          </a>
          <a href="#" className="btn btn-outline">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
