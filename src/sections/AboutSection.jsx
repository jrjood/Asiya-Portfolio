import { useState } from 'react';

function AboutSection({ profile }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id='bio'>
      <h1>about</h1>
      <p>{profile.shortIntro}</p>
      <p className={isExpanded ? '' : 'clamped_bio'}>{profile.fullBio}</p>
      <button
        className='btn_one read_more_btn'
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}

export default AboutSection;
