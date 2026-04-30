import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from '../App'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('Layout', () => {
  it('renders header navigation and footer on every page', () => {
    renderAt('/')
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(nav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Gallery' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('highlights the active nav link for the current route', () => {
    renderAt('/blog')
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(nav).getByRole('link', { name: 'Blog' })).toHaveClass(
      'site-nav__link--active',
    )
    expect(within(nav).getByRole('link', { name: 'Home' })).not.toHaveClass(
      'site-nav__link--active',
    )
  })

  it('navigates between pages via nav links', async () => {
    const user = userEvent.setup()
    renderAt('/')
    await user.click(screen.getByRole('link', { name: 'Gallery' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Gallery' })).toBeInTheDocument()
  })
})
