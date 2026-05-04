const aboutHighlights = [
  '6+ years across social media, digital campaigns, and content direction.',
  'Experienced with real estate, construction, fashion, medical, and handmade brands.',
  'Focused on clear brand voice, strong visuals, team coordination, and measurable growth.',
];

function AboutSection() {
  return (
    <section id='bio' className='content_section split_section'>
      <div className='section_header'>
        <p>Profile</p>
        <h1>about</h1>
      </div>
      <div className='bio_panel'>
        <div>
          <p className='lead_text'>
            I help brands show up clearly, consistently, and creatively online.
          </p>
          <p>
            My work combines social strategy, content planning, influencer
            collaborations, and close coordination with design, media buying,
            sales, and agency teams.
          </p>
        </div>
        <ul className='about_highlights'>
          {aboutHighlights.map((item) => (
            <li key={item}>
              <i className='fas fa-check'></i>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutSection;
