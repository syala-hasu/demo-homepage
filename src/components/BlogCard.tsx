import { Link } from 'react-router-dom'
import type { Post } from '../data/posts'
import './BlogCard.css'

const dateFormatter = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

type Props = {
  post: Post
}

function BlogCard({ post }: Props) {
  return (
    <article className="blog-card">
      <Link to={`/blog/${post.slug}`} className="blog-card__link">
        <div className="blog-card__cover">
          <img src={post.coverImage} alt="" loading="lazy" />
        </div>
        <div className="blog-card__body">
          <time className="blog-card__date" dateTime={post.date}>
            {dateFormatter.format(new Date(post.date))}
          </time>
          <h2 className="blog-card__title">{post.title}</h2>
          <p className="blog-card__excerpt">{post.excerpt}</p>
          <ul className="blog-card__tags" aria-label="Tags">
            {post.tags.map((tag) => (
              <li key={tag} className="blog-card__tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  )
}

export default BlogCard
