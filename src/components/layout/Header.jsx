function Header({ isScrolled }) {
  return (
    <header
      id='header'
      className={`animated slideInDown ${isScrolled ? 'scrolled' : ''}`.trim()}
      style={{ animationDelay: '0.8s' }}
    >
      <table>
        <tbody>
          <tr>
            <td id='logo'>
              <a href='#top_part' aria-label='Go to hero section'>
                asiya.
              </a>
            </td>
            <td id='navigation'>
              <a href='#work'>work</a>
              <a href='#bio'>about</a>
              <a href='#experience'>experience</a>
              <a href='#contact'>contact</a>
            </td>
          </tr>
        </tbody>
      </table>
    </header>
  );
}

export default Header;
