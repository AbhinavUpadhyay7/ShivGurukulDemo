import { BookOpen, GraduationCap, Sprout, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { images, programs } from '../data/siteData'

const icons = [BookOpen, GraduationCap, Sprout]
export default function Programs() {
  return <>
    <PageHero eyebrow="Our Educational Initiatives" title="Learning that opens doors." subtitle="Our focus is simple: help children access education, support their learning and encourage their growth." image={images.books}/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Our Programs" title="Creating opportunities through education" description="These are the core areas represented in this website concept. Final program details should be confirmed by the organization." center/><div className="program-grid program-grid-page">{programs.map((item, i) => {const Icon=icons[i];return <article className="program-card" key={item.number}><div className="program-image"><img src={item.image} alt={item.title}/><span>{item.number}</span></div><div className="program-content"><Icon className="program-icon"/><h3>{item.title}</h3><span className="hindi-label">{item.hindi}</span><p>{item.description}</p></div></article>})}</div></div></section>
    <section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow eyebrow-light">Want to support education?</span><h2>Be part of a child's learning journey.</h2><p>Connect with us to learn about volunteering and other ways to help.</p></div><Link className="button button-gold" to="/get-involved">Get Involved <ArrowUpRight size={16}/></Link></div></section>
  </>
}
