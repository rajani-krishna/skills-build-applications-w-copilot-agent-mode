import logo from '../../../docs/octofitapp-small.png'

function App() {
  return (
    <main className="container py-5">
      <header className="d-flex align-items-center gap-3 mb-5">
        <img src={logo} alt="OctoFit Tracker" width="72" height="72" />
        <div>
          <h1 className="h3 mb-1">OctoFit Tracker</h1>
          <p className="text-body-secondary mb-0">Your fitness journey, together.</p>
        </div>
      </header>
      <section className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h2 className="h5 card-title">Welcome</h2>
          <p className="card-text mb-0">
            Track activities, connect with your team, and reach your fitness goals.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
