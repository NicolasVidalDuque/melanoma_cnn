import './App.css'
import Cnn from './components/pages/Cnn';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContexProvider } from './context/Usercontext';
import Layout from './components/Layout';

function App() {

  return (
    <UserContexProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/CNN" element={<Cnn />}/>
        </Route>
      </Routes>
    </UserContexProvider>  
  )
}

export default App;
