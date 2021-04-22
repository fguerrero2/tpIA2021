import '../App.css';
import { Container } from '@material-ui/core';
import Portada from '../images/portada.jpg';
import NavBar from '../components/NavBar';
import FooterBar from '../components/footerBar';


function Home() {

  return (
   <div>
    <div className="App-NavBar"> 
      <NavBar /> 
      </div>
    <div className="App-header" >
    <Container fixed >
       <img src={Portada} className="App-Portada"  alt="Portada"  /> 
    </Container>
    </div> 
     <div  > 
        <FooterBar />
     </div>
    </div>
  );
}

export default Home;
