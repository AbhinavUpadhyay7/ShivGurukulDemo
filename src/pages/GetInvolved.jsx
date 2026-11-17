import { HeartHandshake, Users, HandHeart, Megaphone, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { images } from '../data/siteData'

const options = [
  {icon:Users,title:'Volunteer Your Time',text:'Support learning activities, help organize initiatives or contribute your skills.'},
  {icon:HandHeart,title:'Offer Your Skills',text:'Share your knowledge, professional skills or educational experience.'},
  {icon:Megaphone,title:'Spread Awareness',text:'Help more people learn about the importance of accessible education.'},
]
export default function GetInvolved() {
  return <>
    <PageHero eyebrow="Be a Part of Change" title="Together, we can make learning possible." subtitle="There are many meaningful ways to support a child's education journey." image={images.children}/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Join Our Mission" title="Your time and skills can make a difference." description="Choose a way to contribute that works for you. Get in touch to understand current opportunities." center/><div className="values-grid involvement-grid">{options.map(({icon:Icon,title,text})=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p><Link to="/contact" className="card-link">Contact us <ArrowRight size={15}/></Link></article>)}</div></div></section>
    <section className="section section-soft"><div className="container split-layout"><img className="rounded-photo" src={images.teacher} alt="Teacher helping children"/><div><SectionHeading eyebrow="A Shared Responsibility" title="A better future is built together."/><p>Communities become stronger when children have access to learning and encouragement. Whether you can offer time, knowledge or help spread awareness, your involvement can support the mission.</p><div className="inline-feature"><HeartHandshake/><span>Every contribution begins with a conversation.</span></div><Link to="/contact" className="button button-dark">Talk to Our Team <ArrowRight size={16}/></Link></div></div></section>
  </>
}
