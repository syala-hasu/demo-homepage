import { useParams } from 'react-router-dom'

function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  return <h1>Blog Post: {slug}</h1>
}

export default BlogPost
