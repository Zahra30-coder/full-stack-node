import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import API_BASE from "./config";

// fetch(`${API_BASE}/api/movies`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(setMovies),
// });

// 🏠 Home Component
const Home = ({ movies, setMovies }) => {
  useEffect(() => {
    axios.get(`${API_BASE}/api/movies`)
      .then(res => setMovies(res.data))
      .catch(console.error)
  }, [setMovies])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/api/movies/${id}`)
      setMovies((prev) => prev.filter((movie) => movie.id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <h1>Best Movies of All Time</h1>
      <p>Total Movies: {movies.length}</p>

      {movies.map(({ id, title, director, release_date }) => (
        <div key={id}>
          <h3>{title}</h3>
          {director && <p><strong>Director:</strong> {director}</p>}
          {release_date && <p><strong>Release Date:</strong> {release_date}</p>}
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

// ➕ AddMovie Component
const AddMovie = ({ setMovies }) => {
  const [form, setForm] = useState({
    title: '',
    director: '',
    release_date: ''
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.title.trim()) {
      alert("Title is required")
      return
    }

    try {
      const res = await axios.post(`${API_BASE}/api/movies`, form)
      setMovies((prev) => [...prev, res.data.movie]) 
      // ...prev gets a copy of the already existing array
      navigate('/')
    } catch (err) {
      console.error("Add movie failed:", err)
    }
  }

  return (
    <div>
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <br />
        <input type="text" name="director" placeholder="Director (optional)" value={form.director} onChange={handleChange} />
        <br />
        <input type="date" name="release_date" value={form.release_date} onChange={handleChange} />
        <br />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  )
}

// 🧠 App Component
const App = () => {
  const [movies, setMovies] = useState([])

  return (
    <Router>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home</Link> | <Link to="/add">Add Movie</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home movies={movies} setMovies={setMovies} />} />
        <Route path="/add" element={<AddMovie setMovies={setMovies} />} />
      </Routes>
    </Router>
  )
}

export default App
