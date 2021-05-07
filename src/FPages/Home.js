import '../App.css';
import { Container } from '@material-ui/core';
import Portada from '../images/portada.jpg';
import NavBar from '../components/NavBar';
import FooterBar from '../components/footerBar';
import Button from '../components/Button';


function Home(props) {

  return (
   <div>
    <div className="App-NavBar"> 
      <NavBar /> 
    </div>
    <div className="App-header">
    <Container  maxWidth="md" /*fixed*/>
        <img  src={Portada} className="App-Portada"  alt="Portada"  /> 
  

    </Container>
    </div> 
     <div  > 
        <FooterBar />
     </div>
    </div>
  );
}

export default Home;


/*
 max-width: 980px
*/