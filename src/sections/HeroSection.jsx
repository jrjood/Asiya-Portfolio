function HeroSection({ profile, socialLinks, revealReady }) {
  const firstName = profile.name.split(' ')[0];

  return (
    <section
      id='top_part'
      className={`hero_lena ${revealReady ? 'hero_ready' : ''}`.trim()}
    >
      <div className='hero-content'>
        <div id='about' className='left-content'>
          <div className='hero_content_wrap left-content-wrap'>
            <h1 className='hero_title hero_reveal_2'>
              Hi, I&apos;m <span className='hero_name'>{firstName}</span>
            </h1>
            <p className='hero_subtitle hero_reveal_3'>{profile.shortIntro}</p>

            <div className='hero_cta hero_reveal_4'>
              <a
                className='btn_one cta_button download_cta'
                href='/cv.pptx'
                download='Asiya-Hosny-CV.pptx'
              >
                Download Cv <i className='fas fa-download'></i>
              </a>
              <a className='btn_one cta_button' href='#contact'>
                Hire Me <i className='fas fa-arrow-up-right-from-square'></i>
              </a>
            </div>
          </div>
        </div>

        <div id='rightImage' className='right-content hero_reveal_img'>
          <div className='hero_visual_layer'>
            <img
              className='hero_person'
              src='/images/asiya-img.webp'
              alt='Asiya portrait'
              loading='eager'
              fetchPriority='high'
              decoding='sync'
            />
            <img
              className='hero_scratch'
              src='/images/scratch-img.webp'
              alt=''
              aria-hidden='true'
              loading='eager'
              fetchPriority='high'
              decoding='sync'
            />
          </div>
        </div>
      </div>

      <div className='hero_socials hero_reveal_5'>
        {socialLinks.map((social) => (
          <a
            key={`top-social-${social.icon}`}
            className='social'
            href={social.url}
            target='_blank'
            rel='noreferrer'
            aria-label={social.label}
          >
            <i className={`fab fa-${social.icon}`}></i>
          </a>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
