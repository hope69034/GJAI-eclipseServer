import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom'
 
function Door() {
    return (
        <>
        <br></br><br></br><br></br>
       <br></br><br></br><br></br>
     {/*        <div className="App"> */}
                <header className="App-header">
                    AI Life Concierge Service
                  <Link to='/main'><img src={logo} className="App-logo" alt="logo" /></Link> 
                    Team Eclipse
                </header>
        {/*     </div> */}

        </>
    )
}
export default Door;