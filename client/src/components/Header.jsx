import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContex } from '../context/Usercontext';
import cancer_ribbon from '../assets/icons/melanoma_ribbon.png'

// TODO: Update with setSelection which tab should be bold (update selection based on selected tab)
function Header() {
  const textDecorator = {textDecoration:'none', color:'black'};
  const {selection, setSelection} = useContext(UserContex);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-nowrap">
        <a href='/' className="container-fluid justify-content-start" style={{...textDecorator,  flex:'1'}}>
            <img src={cancer_ribbon} width='20' />
            <p className="p-1 m-0">Melanoma</p>
        </a>
        <div className='d-flex align-items-center'>
          <Link to='/CNN' className='nav-item' style={{...textDecorator, flex:'1', fontWeight: selection === 'AI'? 'bold':'normal'}}>Image Diagnosis</Link>
          <p className='nav-item'>aoeu</p>
          <p className='nav-item'>aoeu</p>
        </div>
    </nav>
  );
}

export default Header;