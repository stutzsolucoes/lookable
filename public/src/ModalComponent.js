import React from 'react';
import ModalDumbComponent from './ModalDumbComponent.js';

var ModalComponent = React.createClass({

  componentDidUpdate: function() {
    //Gambiarra para poder abrir o modal do look a partir da URL do browser
    if (document.location.href.indexOf("#")!=-1) {
      var lookId = document.location.href.substring(document.location.href.indexOf("#")); //pega o ID do look na URL
      jQuery("[data-url-description="+lookId+"]").first().click(); //encontra o elemento que tem o data-url-description igual ao que foi passado na URL e clica no elemento para abri-lo
    }
  },
  render: function() {
    var ids = [];
    this.props.data.forEach(function(look){
      ids.push(look.id);
    });
    var modalNodes = this.props.data.map(function(looks) {
      var prev, next;
      for (var i = 0; i < ids.length; i++){
        if (ids[i] == looks.id){
          prev = ids[i-1];
          next = ids[i+1];
        }
      }
      return (
        <div key={looks.id} >
              <ModalDumbComponent look={looks} prev={prev} next={next} />
        </div>
      );
    });
    return (
      <div className="galleryBox">
        {modalNodes}
      </div>
    );
  }
});

export default ModalComponent;
