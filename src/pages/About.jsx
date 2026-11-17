import { Heart, Target, Eye, BookOpenCheck } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { images } from '../data/siteData'

export default function About() {
  return <>
    <PageHero eyebrow="Know Our Story" title="About Shiv Rekha Gurukul" subtitle="A commitment to education, dignity and brighter possibilities for every child." image={images.teacher}/>
    <section className="section"><div className="container split-layout"><div><SectionHeading eyebrow="Who We Are" title="Education can change the direction of a life."/><p>Shiv Rekha Gurukul is a non-governmental educational initiative with a simple belief: no child should be left behind because of financial circumstances. Our focus is to make free education and supportive learning opportunities accessible to children who need them.</p><p>We aim to create a caring environment where children can learn, ask questions, build confidence and discover their abilities.</p></div><img className="rounded-photo" src={images.classroom} alt="Children in a classroom"/></div></section>
    <section className="section section-soft"><div className="container"><SectionHeading eyebrow="What Guides Us" title="Our mission, vision and values" center/><div className="values-grid"><article><Target/><h3>Our Mission</h3><p>To support children from disadvantaged backgrounds through access to free education and meaningful learning.</p></article><article><Eye/><h3>Our Vision</h3><p>A society where every child has the opportunity to learn, grow and build a confident future.</p></article><article><Heart/><h3>Our Values</h3><p>Compassion, inclusion, integrity, respect and a belief in the potential of every child.</p></article></div></div></section>
    <section className="section"><div className="container split-layout reverse"><img className="rounded-photo" src={images.books} alt="Children studying"/><div><SectionHeading eyebrow="Our Belief" title="Every child has the potential to shine."/><p>Education is more than lessons and books. It helps children develop curiosity, confidence, communication and the ability to make informed choices.</p><p>With the support of educators, volunteers and the community, we want to help make that opportunity more accessible.</p><div className="inline-feature"><BookOpenCheck/><span>Learning with dignity. Growing with confidence.</span></div></div></div></section>
  </>
}
