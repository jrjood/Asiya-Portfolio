import { useMemo } from 'react';

function ImageLightbox({
  isClosing,
  isVisible,
  activeImage,
  onClose,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}) {
  const magnifyStyle = useMemo(
    () => ({
      display: isVisible ? 'flex' : 'none',
    }),
    [isVisible],
  );

  const imageStyle = useMemo(
    () => ({
      background: activeImage
        ? `url('${activeImage}') center center`
        : "url('') center center",
    }),
    [activeImage],
  );

  return (
    <div
      id='magnify'
      className={isClosing ? 'animated fadeOut' : 'animated fadeIn'}
      style={magnifyStyle}
      onClick={onClose}
    >
      <h1 onClick={onClose}>
        <i className='fas fa-times'></i>
      </h1>

      <button
        type='button'
        className='magnify_nav magnify_prev'
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        disabled={!canGoPrevious}
        aria-label='Previous image'
      >
        <i className='fas fa-chevron-left'></i>
      </button>

      <div
        id='img_here'
        style={imageStyle}
        onClick={(event) => event.stopPropagation()}
      ></div>

      <button
        type='button'
        className='magnify_nav magnify_next'
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        disabled={!canGoNext}
        aria-label='Next image'
      >
        <i className='fas fa-chevron-right'></i>
      </button>
    </div>
  );
}

export default ImageLightbox;
