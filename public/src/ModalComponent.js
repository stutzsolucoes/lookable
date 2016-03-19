import React from 'react';
import ModalDumbComponent from './ModalDumbComponent.js';

var ModalComponent = React.createClass({

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
