function HeroSection({ profile, revealReady }) {
  const firstName = profile.name.split(' ')[0];

  return (
    <section
      id='top_part'
      className={`hero_lena ${revealReady ? 'hero_ready' : ''}`.trim()}
    >
      <div className='hero-content'>
        <div id='about' className='left-content'>
          <div className='hero_content_wrap left-content-wrap'>
            <p className='hero_kicker hero_reveal_1'>
              Digital Marketing Specialist
            </p>
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
                Download CV <i className='fas fa-download'></i>
              </a>
              <a className='btn_one cta_button' href='#contact'>
                Start a Project{' '}
                <i className='fas fa-arrow-up-right-from-square'></i>
              </a>
            </div>

            <dl
              className='hero_stats hero_reveal_5'
              aria-label='Career highlights'
            >
              <div>
                <dt>6+</dt>
                <dd>Years in digital marketing</dd>
              </div>
              <div>
                <dt>5</dt>
                <dd>Industries supported</dd>
              </div>
              <div>
                <dt>27.4k</dt>
                <dd>Organic Instagram growth</dd>
              </div>
            </dl>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
