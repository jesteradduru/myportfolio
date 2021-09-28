import './App.css';
import { Container } from 'reactstrap';
import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';

function App() {
  return (
    <Container className="themed-container">
      <NavBar />
      <Banner />
    </Container>
  );
}

export default App;
