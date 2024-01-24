import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js' 

import './App.css';
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import Headline from './components/Headline';
// import Mainredux from './components/Redux/Mainredux';

function App() {
  return (
    <>

    <Navbar/>
    
    <div className="App">
       <Headline/>
    </div>
    <Footer/>
    </>

  );
}

export default App;
