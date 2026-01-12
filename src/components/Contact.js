// import React, { useState } from 'react';
// import { Mail, Phone, Github, Linkedin, ExternalLink, CheckCircle, Loader, Send } from 'lucide-react';

// const Contact = () => {
//   const [contactForm, setContactForm] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const handleInputChange = (e) => {
//     setContactForm({
//       ...contactForm,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleContactSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     setIsSubmitting(false);
//     setSubmitSuccess(true);
//     setContactForm({ name: '', email: '', subject: '', message: '' });
    
//     setTimeout(() => setSubmitSuccess(false), 5000);
//   };

//   return (
//     <section id="contact" className="section contact-section">
//       <div className="container">
//         <div className="section-header">
//           <h2 className="section-title">Let's Connect</h2>
//           <p className="section-subtitle">Ready to bring your ideas to life</p>
//         </div>
        
//         <div className="contact-content">
//           <div className="contact-info">
//             <div className="contact-text">
//               <h3>Get In Touch</h3>
//               <p>
//                 I'm always excited to discuss new opportunities, innovative projects, 
//                 or just have a conversation about technology and its possibilities.
//               </p>
//             </div>
            
//             <div className="contact-methods">
//               <a href="mailto:gandhivatsal76@gmail.com" className="contact-item">
//                 <div className="contact-icon">
//                   <Mail size={24} />
//                 </div>
//                 <div className="contact-details">
//                   <span className="contact-label">Email</span>
//                   <span className="contact-value">gandhivatsal76@gmail.com</span>
//                 </div>
//               </a>
              
//               <a href="tel:+919875135167" className="contact-item">
//                 <div className="contact-icon">
//                   <Phone size={24} />
//                 </div>
//                 <div className="contact-details">
//                   <span className="contact-label">Phone</span>
//                   <span className="contact-value">+91 9875135167</span>
//                 </div>
//               </a>
              
//               <a href="https://github.com/Vats10987" target="_blank" rel="noopener noreferrer" className="contact-item">
//                 <div className="contact-icon">
//                   <Github size={24} />
//                 </div>
//                 <div className="contact-details">
//                   <span className="contact-label">GitHub</span>
//                   <span className="contact-value">@Vats10987</span>
//                 </div>
//                 <ExternalLink size={16} className="external-icon" />
//               </a>
              
//               <a href="https://www.linkedin.com/in/vatsal-gandhi-b52626230/" target="_blank" rel="noopener noreferrer" className="contact-item">
//                 <div className="contact-icon">
//                   <Linkedin size={24} />
//                 </div>
//                 <div className="contact-details">
//                   <span className="contact-label">LinkedIn</span>
//                   <span className="contact-value">Vatsal Gandhi</span>
//                 </div>
//                 <ExternalLink size={16} className="external-icon" />
//               </a>
//             </div>
//           </div>
          
//           <div className="contact-form-container">
//             <div className="form-header">
//               <h3>Send me a message</h3>
//               <p>I'll get back to you as soon as possible</p>
//             </div>
              
//               {submitSuccess ? (
//                 <div className="success-message">
//                   <CheckCircle size={48} />
//                   <h4>Message Sent!</h4>
//                   <p>Thank you for reaching out. I'll get back to you soon!</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleContactSubmit} className="contact-form">
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="name"
//                       value={contactForm.name}
//                       onChange={handleInputChange}
//                       placeholder="Your Name"
//                       required
//                     />
//                   </div>
                  
//                   <div className="form-group">
//                     <input
//                       type="email"
//                       name="email"
//                       value={contactForm.email}
//                       onChange={handleInputChange}
//                       placeholder="Your Email"
//                       required
//                     />
//                   </div>
                  
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="subject"
//                       value={contactForm.subject}
//                       onChange={handleInputChange}
//                       placeholder="Subject"
//                       required
//                     />
//                   </div>
                  
//                   <div className="form-group">
//                     <textarea
//                       name="message"
//                       value={contactForm.message}
//                       onChange={handleInputChange}
//                       placeholder="Your Message"
//                       rows="5"
//                       required
//                     ></textarea>
//                   </div>
                  
//                   <button 
//                     type="submit" 
//                     className="submit-btn"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <Loader size={18} className="spinning" />
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send size={18} />
//                         Send Message
//                       </>
//                     )}
//                   </button>
//                 </form>
//               )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, CheckCircle, Loader, Send } from 'lucide-react';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setContactForm({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Ready to bring your ideas to life</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-text">
              <h3>Get In Touch</h3>
              <p>
                I'm always excited to discuss new opportunities, innovative projects, 
                or just have a conversation about technology and its possibilities.
              </p>
            </div>
            
            <div className="contact-methods">
              <a href="mailto:gandhivatsal76@gmail.com" className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">gandhivatsal76@gmail.com</span>
                </div>
              </a>
              
              <a href="tel:+919875135167" className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+1 (646) 542 2485</span>
                </div>
              </a>
              
              <a href="https://github.com/Vats10987" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">
                  <Github size={24} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">@Vats10987</span>
                </div>
                <ExternalLink size={16} className="external-icon" />
              </a>
              
              <a href="https://www.linkedin.com/in/vatsal-gandhi-b52626230/" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">
                  <Linkedin size={24} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">Vatsal Gandhi</span>
                </div>
                <ExternalLink size={16} className="external-icon" />
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="form-header">
              <h3>Send me a message</h3>
              <p>I'll get back to you as soon as possible</p>
            </div>
              
              {submitSuccess ? (
                <div className="success-message">
                  <CheckCircle size={48} />
                  <h4>Message Sent!</h4>
                  <p>Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader size={18} className="spinning" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;