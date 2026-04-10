function LoadingScreen({ isLoadingClosing }) {
  return (
    <div id='loading' className={isLoadingClosing ? 'animated fadeOut' : ''}>
      <div id='spinner'></div>
    </div>
  );
}

export default LoadingScreen;
