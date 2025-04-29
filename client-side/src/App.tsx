
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
 

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
