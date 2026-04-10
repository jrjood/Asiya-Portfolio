function Header({ isScrolled }) {
  return (
    <header
      id='header'
      className={`animated slideInDown ${isScrolled ? 'scrolled' : ''}`.trim()}
      style={{ animationDelay: '1.8s' }}
    >
      <table>
        <tbody>
          <tr>
            <td id='logo'>asiya.</td>
            <td id='navigation'>
              <a href='#work'>work</a>
              <a href='#bio'>about</a>
              <a
                href='https://www.linkedin.com/in/asiya-hosny-50377720b/'
                target='_blank'
                rel='noreferrer'
              >
                blog
              </a>
              <a href='#contact'>contact</a>
            </td>
          </tr>
        </tbody>
      </table>
    </header>
  );
}

export default Header;
