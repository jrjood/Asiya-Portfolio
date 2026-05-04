const socialShortLabels = {
  'facebook-f': 'Fb.',
  instagram: 'Ig.',
  tiktok: 'Tk.',
  'linkedin-in': 'In.',
};

function SocialRail({ socialLinks }) {
  return (
    <nav className='social_rail' aria-label='Social links'>
      {socialLinks.map((social) => (
        <a
          key={`rail-social-${social.icon}`}
          className='social_rail_link'
          href={social.url}
          target='_blank'
          rel='noreferrer'
          aria-label={social.label}
        >
          {socialShortLabels[social.icon] || social.label.slice(0, 2)}
        </a>
      ))}
    </nav>
  );
}

export default SocialRail;
