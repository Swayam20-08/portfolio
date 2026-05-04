import SectionTitle from './SectionTitle';

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5H3.56v11h3.38v-11zM5.25 3a1.96 1.96 0 100 3.92 1.96 1.96 0 000-3.92zM20.44 13.2c0-3.32-1.77-4.86-4.14-4.86-1.9 0-2.76 1.05-3.24 1.79V8.5H9.69v11h3.37v-6.13c0-1.62.31-3.2 2.32-3.2 1.99 0 2.02 1.87 2.02 3.3v6.03h3.38l-.34-6.3z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.3 9.39 7.88 10.9.58.11.79-.25.79-.56v-2c-3.2.69-3.87-1.35-3.87-1.35-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.28 1.18-3.09-.12-.29-.51-1.48.11-3.08 0 0 .97-.31 3.18 1.18a10.9 10.9 0 015.8 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.6.23 2.79.11 3.08.74.81 1.18 1.84 1.18 3.09 0 4.4-2.68 5.37-5.24 5.66.41.35.77 1.03.77 2.08v3.08c0 .31.21.68.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:swayamgoradiya@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5.5h18a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1v-11a1 1 0 011-1zm9 7.2l8-5.2H4l8 5.2zm0 2L4 9.5V16h16V9.5l-8 5.2z" />
      </svg>
    ),
  },
];

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:swayamgoradiya@gmail.com?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle label="— let us connect —" title="Contact" />
        <form className="contact-form reveal" data-animate="true" data-delay="1" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <textarea name="message" placeholder="Your Message" rows="5" required />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        <div className="social-row reveal" data-animate="true" data-delay="2">
          {socials.map((social) => (
            <a
              href={social.href}
              key={social.name}
              aria-label={social.name}
              target={social.name === 'Email' ? undefined : '_blank'}
              rel={social.name === 'Email' ? undefined : 'noreferrer'}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
