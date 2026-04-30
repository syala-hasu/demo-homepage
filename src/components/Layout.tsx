import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import './Layout.css'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/blog', label: 'Blog', end: false },
  { to: '/gallery', label: 'Gallery', end: false },
]

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="layout">
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to="/" className="site-logo" end>
            Demo Homepage
          </NavLink>
          <button
            type="button"
            className="site-header__toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
          <nav
            id="primary-nav"
            aria-label="Primary"
            className={`site-nav-wrapper ${menuOpen ? 'site-nav-wrapper--open' : ''}`}
          >
            <ul className="site-nav">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <p>&copy; {new Date().getFullYear()} Demo Homepage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
