import Sidebar from './components/layout/Sidebar'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <h1>Employee Security & Compliance Platform</h1>
        <p>Admin Dashboard</p>
      </main>
    </div>
  )
}

export default App