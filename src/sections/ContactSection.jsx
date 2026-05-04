import { useState } from 'react';

function ContactSection({ profile, socialLinks }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [formStatusType, setFormStatusType] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      _subject: 'New portfolio contact message',
    };

    setIsSubmitting(true);
    setFormStatus('');
    setFormStatusType('');

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/asiahosny4@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      form.reset();
      setFormStatus('Message sent successfully. I will get back to you soon.');
      setFormStatusType('success');
    } catch {
      setFormStatus('Message failed to send. Please try again.');
      setFormStatusType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='content_section contact_section'>
      <div className='section_header'>
        <p>Let&apos;s connect</p>
        <h1>contact</h1>
      </div>
      <div className='contact_grid'>
        <div id='inner_div' className='contact_card'>
          <p className='lead_text'>
            Available for marketing supervision, content strategy, influencer
            campaigns, and brand growth projects.
          </p>
          <a className='contact_link' href={`tel:${profile.phone}`}>
            <i className='fas fa-phone'></i>
            {profile.phone}
          </a>
          <a className='contact_link' href={`mailto:${profile.email}`}>
            <i className='fas fa-at'></i>
            {profile.email}
          </a>
          <div className='footer_social_wrap'>
            {socialLinks.map((social) => (
              <a
                key={`bottom-social-${social.icon}`}
                className='social footer_social_icon'
                href={social.url}
                target='_blank'
                rel='noreferrer'
                aria-label={social.label}
              >
                <i className={`fab fa-${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        <form className='contact_form' onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder='name' required />
          <input type='email' name='email' placeholder='email' required />
          <textarea
            name='message'
            placeholder='your message'
            required
            rows='5'
          ></textarea>
          <button className='btn_one' type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'sending...' : 'send'}
            <i className='fas fa-paper-plane'></i>
          </button>
          {formStatus ? (
            <p className={`form_status ${formStatusType}`}>{formStatus}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
