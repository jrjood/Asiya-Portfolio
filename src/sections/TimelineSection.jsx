function TimelineSection({ id, title, items, type }) {
  return (
    <section id={id} className='content_section'>
      <div className='section_header'>
        <p>{type === 'work' ? 'Career path' : 'Credentials'}</p>
        <h1>{title}</h1>
      </div>
      <div className='timeline_list'>
        {items.map((item) => (
          <article
            key={`${item.period || item.year}-${item.company || item.institution}`}
            className='timeline_item'
          >
            <div className='timeline_heading'>
              {item.logo ? (
                <img
                  className='timeline_logo'
                  src={item.logo}
                  alt={`${item.institution} logo`}
                  loading='lazy'
                />
              ) : null}
              <h3>{type === 'work' ? item.position : item.credential}</h3>
            </div>
            <p className='timeline_meta'>
              {type === 'work' ? item.period : item.year} |{' '}
              {type === 'work' ? item.company : item.institution}
            </p>
            {item.details ? <p>{item.details}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export default TimelineSection;
