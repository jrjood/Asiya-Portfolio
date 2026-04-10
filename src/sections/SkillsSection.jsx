function SkillsSection({ skills }) {
  return (
    <section id='skills' className='content_section'>
      <h1>skills</h1>
      <div className='pill_wrap'>
        {skills.map((skill) => (
          <span key={skill} className='skill_pill'>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
