import './App.css';
import React from 'react';
import { Container } from 'reactstrap';
import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "home"
    }
  }
  onPageChange = (event) => {
    const page = event.target.getAttribute("data-page");
    this.setState({ route: page});
  }
  render(){
    const route = this.state.route;
    if(route === "home"){
      return (
        <div>
          <Container>
            <NavBar pageChange={this.onPageChange}/>
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
    else if(route === "contact"){
     return(
        <>
          <Container>
              <NavBar pageChange={this.onPageChange} />
              <ContactForm />
          </Container>
        </>
     );
    }
  }
}

export default App;
