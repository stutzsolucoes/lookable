import React, { Component } from 'react';
import ModalComponent from './ModalComponent.js';


export default class Modal extends Component {

  render() {
    return (
      <div className="modalBox">
        <ModalComponent />
      </div>
    );
  }
}

/*
query.find({
  success: function(results){
    this.setState({data: results});
    for (var y = 0; y < results.length; y++){
      var look = results[y];
      var produtos = look.relation('produtos');
      produtos.query().find({
        success: function(produtos){
            (function(produtos){
              this.setState({produto: produtos});
            }.bind(this)(produtos))

        }.bind(this)
      });
    }
  }.bind(this),
  */
