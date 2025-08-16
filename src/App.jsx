import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import BorrowList from './pages/BorrowList';


function App() {
  // const [count, setCount] = useState(0)

  return (

    <Router>
      <nav variant="gradient"
      color="blue-gray"
      className="mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3">
        <Link to="/">SearchPage</Link>
        <Link to="/list">BorrowList</Link>
      </nav>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/list" element={<BorrowList />} />
      </Routes>
    </Router>
  )
}

export default App
