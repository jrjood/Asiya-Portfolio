function SkillsSection({ skills }) {
  return (
    <section id='skills' className='content_section'>
      <div className='section_header'>
        <p>Capabilities</p>
        <h1>skills</h1>
      </div>
      <div className='pill_wrap'>
        {skills.map((skill) => (
          <span key={skill} className='skill_pill'>
            <i className='fas fa-check'></i>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
