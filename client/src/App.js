import './App.css';
import Dashboard from './components/dashboard';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
