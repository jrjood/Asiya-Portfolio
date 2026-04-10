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
    <div id='contact'>
      <h1>contact</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <div id='inner_div'>
                <table id='inner_table'>
                  <tbody>
                    <tr>
                      <td>
                        <i className='fas fa-phone'></i> &nbsp; {profile.phone}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className='fas fa-at'></i> &nbsp; {profile.email}
                      </td>
                    </tr>

                    <tr>
                      <td>
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
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
            <td>
              <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='name' required />
                <input type='email' name='email' placeholder='email' required />
                <br />
                <textarea
                  name='message'
                  placeholder='your message'
                  required
                  rows='5'
                ></textarea>
                <br />
                <button
                  className='btn_one'
                  type='submit'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'sending...' : 'send'}
                </button>
                {formStatus ? (
                  <p className={`form_status ${formStatusType}`}>
                    {formStatus}
                  </p>
                ) : null}
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ContactSection;
