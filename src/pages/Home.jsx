import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, BookOpen, HeartHandshake, Sprout, Users, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { images, programs } from '../data/siteData'

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Welcome to Shiv Rekha Gurukul</span>
            <h1>Every child deserves <em>a chance to shine.</em></h1>
            <p className="hero-hindi">हर बच्चे का सपना, शिक्षा से हो अपना।</p>
            <p className="hero-description">We are committed to making free education accessible to children who need it most. Together, we can help create a future filled with knowledge, confidence and opportunity.</p>
            <div className="hero-actions"><Link to="/about" className="button button-gold">Discover Our Work <ArrowUpRight size={16}/></Link><Link to="/get-involved" className="text-link">Be a part of change <ArrowRight size={16}/></Link></div>
            <div className="hero-note"><span className="note-icon"><BookOpen size={17}/></span><span>Learning today. Leading tomorrow.</span></div>
          </div>
          <div className="hero-visual">
            <img src={images.hero} alt="Children learning together" />
            <div className="hero-image-caption"><span>OUR COMMITMENT</span><strong>Education for every child.</strong></div>
            <div className="hero-stamp"><HeartHandshake size={23}/><span>Learn<br/>Grow<br/>Shine</span></div>
          </div>
        </div>
      </section>

      <section className="impact-strip">
        <div className="container impact-grid">
          <div><strong>100%</strong><span>Commitment to education</span></div>
          <div><strong>Free</strong><span>Learning opportunity</span></div>
          <div><strong>Every</strong><span>Child matters</span></div>
          <div><strong>One</strong><span>Shared mission</span></div>
        </div>
        <p className="container impact-note">Impact figures will be updated with verified organization data.</p>
      </section>

      <section className="section">
        <div className="container about-preview">
          <div className="image-stack"><img className="image-main" src={images.teacher} alt="Teacher helping children learn"/><div className="image-note"><span>OUR BELIEF</span><strong>Education is a right, not a privilege.</strong></div></div>
          <div className="about-preview-copy">
            <SectionHeading eyebrow="Who We Are" title="A small step towards a brighter tomorrow." description="Shiv Rekha Gurukul is a non-governmental educational initiative focused on providing free learning opportunities to children from financially disadvantaged backgrounds."/>
            <p>We believe every child has potential. Access to education, caring guidance and a positive learning environment can help that potential grow.</p>
            <ul className="check-list"><li><CheckCircle2/>Free education as our central commitment</li><li><CheckCircle2/>A supportive and encouraging learning environment</li><li><CheckCircle2/>Learning, confidence and personal growth</li></ul>
            <Link to="/about" className="button button-dark">Know Our Story <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="What We Do" title="Learning opportunities that make a difference." description="Our work is centred around education and the development of every child." center/>
          <div className="program-grid">
            {programs.map((program, index) => {
              const Icon = [BookOpen, Users, Sprout][index]
              return <article className="program-card" key={program.number}><div className="program-image"><img src={program.image} alt={program.title}/><span>{program.number}</span></div><div className="program-content"><Icon className="program-icon"/><h3>{program.title}</h3><span className="hindi-label">{program.hindi}</span><p>{program.description}</p><Link to="/programs" className="card-link">Explore program <ArrowRight size={15}/></Link></div></article>
            })}
          </div>
          <div className="center-button"><Link to="/programs" className="button button-outline">View All Programs <ArrowUpRight size={16}/></Link></div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container mission-grid">
          <div><span className="eyebrow">Our Mission & Vision</span><h2>Building a world where every child can learn.</h2><p>We want to contribute to a society where a child's financial background does not decide their access to education.</p><div className="mission-points"><div><span className="mission-number">01</span><div><h3>Our Mission</h3><p>To support access to free education and meaningful learning opportunities for children in need.</p></div></div><div><span className="mission-number">02</span><div><h3>Our Vision</h3><p>A more educated, confident and empowered generation with opportunities to shape its future.</p></div></div></div><Link to="/about" className="text-link">Read about our purpose <ArrowRight size={16}/></Link></div>
          <div className="mission-image"><img src={images.learning} alt="Children learning in a group"/><div className="mission-quote">“शिक्षा वह रोशनी है जो भविष्य का रास्ता दिखाती है।”</div></div>
        </div>
      </section>

      <section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow eyebrow-light">Be the reason someone learns</span><h2>Your support can shape a child's future.</h2><p>Share your time, skills or encouragement. Become a part of the education journey.</p></div><Link to="/get-involved" className="button button-gold">Get Involved <ArrowUpRight size={16}/></Link></div></section>

      <section className="section gallery-preview"><div className="container"><SectionHeading eyebrow="A Glimpse of Our Work" title="Moments that matter." description="A look at learning, encouragement and the joy of discovery." center/><div className="home-gallery"><img src={images.classroom} alt="Classroom learning"/><img src={images.books} alt="Students learning"/><img src={images.children} alt="Children participating"/><img src={images.writing} alt="Student writing"/></div><div className="center-button"><Link to="/gallery" className="button button-outline">Explore Gallery <ArrowRight size={16}/></Link></div></div></section>
    </>
  )
}
