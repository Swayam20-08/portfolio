function SectionTitle({ label, title }) {
  return (
    <div className="section-title-wrap reveal" data-animate="true">
      <p className="section-label">{label}</p>
      <h2 className="section-heading">{title}</h2>
      <span className="section-underline" />
    </div>
  );
}

export default SectionTitle;
