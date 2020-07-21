import React, {Component} from 'react';
import './css/layout.css';
import LivroBox from './Livro';



class App extends Component{

  render(){
    return (
      <div id="layout">
    <a href="#menu" id="menuLink" className="menu-link">
        <span></span>
    </a>

    <div id="menu">
            <div className="menu">
                  <a className="menu-heading" href="#">Livroteca</a>
            </div>
        </div>
        <LivroBox/>
    </div>
    );
  }
}

export default App;
