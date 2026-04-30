import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from './App'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('App routing', () => {
  it('renders the Home page at /', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeInTheDocument()
  })

  it('renders the Blog page at /blog', () => {
    renderAt('/blog')
    expect(screen.getByRole('heading', { level: 1, name: 'Blog' })).toBeInTheDocument()
  })

  it('renders the BlogPost page at /blog/:slug', () => {
    renderAt('/blog/hello-world')
    expect(
      screen.getByRole('heading', { level: 1, name: 'Blog Post: hello-world' }),
    ).toBeInTheDocument()
  })

  it('renders the Gallery page at /gallery', () => {
    renderAt('/gallery')
    expect(screen.getByRole('heading', { level: 1, name: 'Gallery' })).toBeInTheDocument()
  })
})
