function LoadingScreen({ isLoadingClosing }) {
  return (
    <div
      id='loading'
      className={
        isLoadingClosing ? 'loading_screen loading_closing' : 'loading_screen'
      }
      aria-live='polite'
      aria-label='Loading portfolio'
    >
      <div className='loading_brand'>
        <span>asiya.</span>
        <p>Marketing Supervisor</p>
      </div>
      <div id='spinner' aria-hidden='true'></div>
    </div>
  );
}

export default LoadingScreen;
