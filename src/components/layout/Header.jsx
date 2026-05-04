function Header({ isScrolled }) {
  return (
    <header
      id='header'
      className={`animated slideInDown ${isScrolled ? 'scrolled' : ''}`.trim()}
      style={{ animationDelay: '0.8s' }}
    >
      <a id='logo' href='#top_part' aria-label='Go to hero section'>
        asiya.
      </a>
      <nav id='navigation' aria-label='Primary navigation'>
        <a href='#bio'>about</a>
        <a href='#skills'>skills</a>
        <a href='#work'>work</a>
        <a href='#experience'>experience</a>
        <a href='#contact'>contact</a>
      </nav>
    </header>
  );
}

export default Header;
