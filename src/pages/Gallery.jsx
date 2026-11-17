import { useState } from 'react'
import { X } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { galleryImages, images } from '../data/siteData'

export default function Gallery() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Learning', 'Activities', 'Teaching']
  const visible = galleryImages.filter(item => filter === 'All' || item.category === filter)
  return <>
    <PageHero eyebrow="Our Gallery" title="A glimpse of learning and growth." subtitle="Every photograph tells a story of curiosity, effort and possibility." image={images.learning}/>
    <section className="section"><div className="container"><SectionHeading eyebrow="Photo Stories" title="Moments that matter" description="Sample photographs for layout preview. Replace these with approved photographs from the Gurukul." center/><div className="filter-row">{filters.map(item=><button key={item} onClick={()=>setFilter(item)} className={filter===item?'filter-button active':'filter-button'}>{item}</button>)}</div><div className="gallery-grid">{visible.map((item,i)=><button className="gallery-item" key={item.src+i} onClick={()=>setSelected(item)}><img src={item.src} alt={item.alt}/><span>{item.category}</span></button>)}</div></div></section>
    {selected && <div className="lightbox" role="dialog" aria-modal="true" onClick={()=>setSelected(null)}><button aria-label="Close image" className="lightbox-close"><X/></button><img src={selected.src} alt={selected.alt}/><p>{selected.alt}</p></div>}
  </>
}
