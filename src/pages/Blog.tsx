import BlogCard from '../components/BlogCard'
import { posts } from '../data/posts'
import './Blog.css'

function Blog() {
  const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <ul className="blog-grid">
        {sortedPosts.map((post) => (
          <li key={post.slug}>
            <BlogCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blog
