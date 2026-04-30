import { Link, useParams } from 'react-router-dom'
import { posts } from '../data/posts'
import './BlogPost.css'

const dateFormatter = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="blog-post-not-found">
        <h1>記事が見つかりませんでした</h1>
        <p>お探しの記事は存在しないか、削除された可能性があります。</p>
        <Link to="/blog">← 一覧へ戻る</Link>
      </div>
    )
  }

  return (
    <article className="blog-post">
      <Link to="/blog" className="blog-post__back">
        ← 一覧へ戻る
      </Link>
      <header className="blog-post__header">
        <time className="blog-post__date" dateTime={post.date}>
          {dateFormatter.format(new Date(post.date))}
        </time>
        <h1 className="blog-post__title">{post.title}</h1>
        <ul className="blog-post__tags" aria-label="Tags">
          {post.tags.map((tag) => (
            <li key={tag} className="blog-post__tag">
              {tag}
            </li>
          ))}
        </ul>
      </header>
      <div className="blog-post__body">
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}

export default BlogPost
