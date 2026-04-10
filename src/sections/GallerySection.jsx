function GallerySection({ projectGroups, onImageClick }) {
  return (
    <div id='work'>
      <h1>work</h1>
      <div className='project_gallery_grid'>
        {projectGroups.map((project, projectIndex) => (
          <article key={project.slug} className='project_stack_card'>
            <div className='project_stack_header'>
              <h3>{project.title}</h3>
              <p>{project.period}</p>
            </div>

            <div className={`phone_stack stack_${(projectIndex % 4) + 1}`}>
              {project.images.map((url, imageIndex) => (
                <button
                  key={url}
                  type='button'
                  className={`phone_screen layer_${imageIndex + 1}`}
                  onClick={() => onImageClick(project.images, imageIndex)}
                  aria-label={`Open ${project.title} screen ${imageIndex + 1}`}
                >
                  <img
                    src={url}
                    alt={`${project.title} social media preview`}
                    loading='lazy'
                  />
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default GallerySection;
