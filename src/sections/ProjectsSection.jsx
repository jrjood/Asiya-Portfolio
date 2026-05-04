function ProjectsSection({ projects, galleryProjects, onImageClick }) {
  const galleryMap = new Map(
    galleryProjects.map((group) => [group.slug, group]),
  );

  return (
    <section id='work' className='content_section'>
      <div className='section_header project_section_header'>
        <p>Selected work</p>
        <h1>projects</h1>
      </div>
      <div className='project_grid'>
        {projects.map((project, projectIndex) => {
          const galleryGroup = galleryMap.get(project.gallerySlug);

          return (
            <article key={project.name} className='project_card'>
              <div className='project_card_header'>
                <div>
                  <h3>{project.name}</h3>
                  <p className='timeline_meta'>{project.duration}</p>
                </div>
                <div className='platform_wrap'>
                  {project.platforms.map((platform) => (
                    <span
                      key={`${project.name}-${platform}`}
                      className='platform_badge'
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
              <p>{project.description}</p>

              {galleryGroup ? (
                <div
                  className={`phone_stack stack_${(projectIndex % 4) + 1} project_card_stack`}
                >
                  {galleryGroup.images.map((url, imageIndex) => (
                    <button
                      key={url}
                      type='button'
                      className={`phone_screen layer_${imageIndex + 1}`}
                      onClick={() =>
                        onImageClick(galleryGroup.images, imageIndex)
                      }
                      aria-label={`Open ${project.name} screen ${imageIndex + 1}`}
                    >
                      <img
                        src={url}
                        alt={`${project.name} social media preview`}
                        loading='lazy'
                      />
                    </button>
                  ))}
                </div>
              ) : null}

              {project.metrics ? (
                <div className='metric_box'>
                  {project.metrics.map((metric) => (
                    <p key={metric}>
                      <i className='fas fa-chart-line'></i>
                      {metric}
                    </p>
                  ))}
                </div>
              ) : null}

              {project.achievements ? (
                <ul className='project_list'>
                  {project.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              ) : null}

              {project.beforeAfter ? (
                <div className='before_after_grid'>
                  <div>
                    <h4>Before</h4>
                    <p>{project.beforeAfter.before}</p>
                  </div>
                  <div>
                    <h4>After</h4>
                    <p>{project.beforeAfter.after}</p>
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
