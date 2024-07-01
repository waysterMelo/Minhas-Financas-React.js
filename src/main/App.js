import React from 'react';
import "bootswatch/dist/cyborg/bootstrap.min.css";
import Rotas from './Rotas';
import NavBar from "../components/NavBar";
import "toastr/build/toastr.min";
import "toastr/build/toastr.css";


class App extends React.Component {

  render() {
      return(
          <div>
              <NavBar/>
              <div className="container">
                  <Rotas />
              </div>
          </div>
      )
  }
}

export default App;