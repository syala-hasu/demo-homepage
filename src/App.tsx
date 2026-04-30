import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Gallery from './pages/Gallery'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/blog">Blog</Link>
        {' | '}
        <Link to="/gallery">Gallery</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
    </>
  )
}

export default App
