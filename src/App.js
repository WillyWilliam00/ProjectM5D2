import MyNavBar from "./navBar.jsx"
import Jumbotron from "./Welcome.jsx"
import Footer from "./Footer.jsx"
import TableBook from "./LatestRelease.jsx"

import './App.css';


function App() {
    return (
    <>
    <MyNavBar/>
    <div className="bg-body-secondary">
      <Jumbotron/>
    </div>
    <TableBook/>
    
    <Footer/>
    </>
  );
}

export default App;
