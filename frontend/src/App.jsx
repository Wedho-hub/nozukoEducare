import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import Post from './pages/blog/Post'
import Classes from './pages/classes/Classes'
import Contact from './pages/contact/Contact'
import AdminWrite from './pages/admin/AdminWrite'
import LoginPage from './pages/admin/LoginPage'

// App: top-level layout and routing
export default function App() {
  return (
    <>
      {/* Application metadata (site-wide) */}
      <Helmet>
        <title>Nozuko Educare</title>
        <meta name="description" content="Nozuko Educare - nurturing early childhood education" />
      </Helmet>

      <Navbar />

      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<Post />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin/write" element={<AdminWrite />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
