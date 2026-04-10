function TimelineSection({ id, title, items, type }) {
  return (
    <section id={id} className='content_section'>
      <h1>{title}</h1>
      <div className='timeline_list'>
        {items.map((item) => (
          <article
            key={`${item.period || item.year}-${item.company || item.institution}`}
            className='timeline_item'
          >
            <h3>{type === 'work' ? item.position : item.credential}</h3>
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
