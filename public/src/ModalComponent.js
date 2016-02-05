import React from 'react';
import ModalDumbComponent from './ModalDumbComponent.js';

var ModalComponent = React.createClass({

  render: function() {
    var modalNodes = this.props.data.map(function(looks) {
      return (
        <div key={looks.id} >
              <ModalDumbComponent look={looks} />
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
