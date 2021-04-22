import '../App.css';
import { Container } from '@material-ui/core';
import AdminNavBar from '../components/AdminNarBar';
import FooterBar from '../components/footerBar';


function AdminProductos() {

  return (
   <div>
    <div className="App-NavBar"> 
      <AdminNavBar/> 
      </div>
    <div className="App-bodyAdmin" >
    <Container fixed >
       Productos

    
    </Container>
    </div> 
     <div  > 
        <FooterBar />
     </div>
    </div>
  );
}

export default AdminProductos;
