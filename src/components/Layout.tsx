import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/blog', label: 'Blog', end: false },
  { to: '/gallery', label: 'Gallery', end: false },
]

function Layout() {
  return (
    <div className="layout">
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to="/" className="site-logo" end>
            Demo Homepage
          </NavLink>
          <nav aria-label="Primary">
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
