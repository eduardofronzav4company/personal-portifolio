import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './comoponents/Navbar';
import { Banner } from './comoponents/Banner';
import { Skills } from './comoponents/Skills';
import { Projects } from './comoponents/Projects';
import { Footer } from './comoponents/Footer';

function App() {
  return (
    <>
      <div className='App'>
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Footer />
      </div>

    </>
  );
}

export default App;
