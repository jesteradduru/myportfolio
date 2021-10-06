import './App.css';
import { Container } from 'reactstrap';
import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';

function App() {
  return (
    <div>
      <Container>
        <NavBar />
        <Banner />  
      </Container>
      <About />
      <Container>
        <Projects />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
