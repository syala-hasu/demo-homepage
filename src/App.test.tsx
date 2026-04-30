import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from './App'
import { persona } from './data/persona'
import { posts } from './data/posts'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('App routing', () => {
  it('renders the Home page Hero and About at /', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1, name: persona.tagline })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'About' })).toBeInTheDocument()
    expect(screen.getByText(persona.bio)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: persona.heroImageAlt })).toHaveAttribute(
      'src',
      persona.heroImageUrl,
    )
  })

  it('renders the Blog page at /blog', () => {
    renderAt('/blog')
    expect(screen.getByRole('heading', { level: 1, name: 'Blog' })).toBeInTheDocument()
  })

  it('renders the BlogPost page at /blog/:slug with title, body and tags', () => {
    const post = posts.find((p) => p.slug === 'hello-world')!
    renderAt(`/blog/${post.slug}`)
    expect(screen.getByRole('heading', { level: 1, name: post.title })).toBeInTheDocument()
    expect(screen.getByText(post.body[0])).toBeInTheDocument()
    for (const tag of post.tags) {
      expect(screen.getByText(tag)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: /一覧へ戻る/ })).toHaveAttribute('href', '/blog')
  })

  it('renders Not Found for an unknown blog slug', () => {
    renderAt('/blog/this-slug-does-not-exist')
    expect(
      screen.getByRole('heading', { level: 1, name: '記事が見つかりませんでした' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /一覧へ戻る/ })).toHaveAttribute('href', '/blog')
  })

  it('renders the Gallery page at /gallery', () => {
    renderAt('/gallery')
    expect(screen.getByRole('heading', { level: 1, name: 'Gallery' })).toBeInTheDocument()
  })
})
