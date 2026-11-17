import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { images, organization } from '../data/siteData'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  function handleSubmit(e) { e.preventDefault(); setSubmitted(true) }
  return <>
    <PageHero eyebrow="Get in Touch" title="We would love to hear from you." subtitle="Have a question or want to learn how you can support the education initiative? Reach out to us." image={images.hero}/>
    <section className="section"><div className="container contact-layout"><div><SectionHeading eyebrow="Contact Details" title="Let's start a conversation." description="The details below are placeholders for the demo. Replace them with verified official contact information before publishing."/><div className="contact-list"><div><span><MapPin/></span><section><h3>Address</h3><p>{organization.address}</p></section></div><div><span><Phone/></span><section><h3>Phone</h3><p>{organization.phone}</p></section></div><div><span><Mail/></span><section><h3>Email</h3><p>{organization.email}</p></section></div></div></div>
      <form className="contact-form" onSubmit={handleSubmit}><h2>Send us a message</h2><p>Fill in the form below. This frontend demo does not transmit or store submissions.</p><label>Full Name<input required name="name" placeholder="Your name"/></label><label>Email Address<input required type="email" name="email" placeholder="you@example.com"/></label><label>Phone Number<input type="tel" name="phone" placeholder="Your mobile number"/></label><label>How can we help?<select name="subject"><option>General enquiry</option><option>Volunteer opportunity</option><option>Education support</option><option>Other</option></select></label><label>Message<textarea required name="message" rows="4" placeholder="Write your message..."/></label><button className="button button-dark" type="submit">Send Message <Send size={15}/></button>{submitted && <div className="form-success" role="status">Thank you! This is a demo form. Connect a backend to receive messages.</div>}</form>
    </div></section>
  </>
}
