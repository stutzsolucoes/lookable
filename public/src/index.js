import React from 'react';
import ReactDOM from 'react-dom';
import Featured from './Featured';
import App from './App';
//import Modal from './Modal';

ReactDOM.render(<Featured/>, document.getElementById('featured'));
ReactDOM.render(<App/>, document.getElementById('root'));
//ReactDOM.render(<Modal/>, document.getElementById('galleryItemComponent'));

//Gambiarra para poder usar a URL do navegador e o botao de voltar
jQuery(window).on("popstate", function(event) {
  if(event.originalEvent.state.id=="home" || event.originalEvent.state.origin == "home") {
    jQuery(".close-modal").click();
    history.pushState({id: "home"}, "Home", "/");
  }
});
