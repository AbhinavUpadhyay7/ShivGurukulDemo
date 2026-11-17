import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight, BookOpen } from 'lucide-react'

const links = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Our Programs', '/programs'],
  ['Gallery', '/gallery'],
  ['Get Involved', '/get-involved'],
  ['Contact', '/contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark"><BookOpen size={23} /></span>
          <span className="brand-copy">
            <strong>Shiv Rekha Gurukul</strong>
            <small>EDUCATION FOR EVERY CHILD</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} end={path === '/'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{label}</NavLink>
          ))}
        </nav>
        <Link to="/get-involved" className="button button-gold header-cta">Join Our Mission <ArrowUpRight size={15} /></Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, path]) => <NavLink key={path} to={path} onClick={close}>{label}</NavLink>)}
          <Link to="/get-involved" className="button button-gold" onClick={close}>Join Our Mission</Link>
        </nav>
      )}
    </header>
  )
}
