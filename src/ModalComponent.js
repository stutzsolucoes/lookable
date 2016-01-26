import React from 'react';
import ModalDumbComponent from './ModalDumbComponent.js';

var ModalComponent = React.createClass({

  getInitialState: function() {
    return {data: [],
            produto: []};
  },

  componentDidMount:function() {
    var Look = Parse.Object.extend("Look");
    var query = new Parse.Query(Look);
    query.descending("createdAt");
    query.find({
      success: function(results){
        this.setState({data: results});

        var look = results[1];
        var produtos = look.relation('produtos');
        produtos.query().find({
          success: function(produtos){
            this.setState({produto: produtos});
          }.bind(this)
        });
      }.bind(this),
      error: function(error) {
          alert("Error: " + error.code + " " + error.message);
      }
    });
  },

  render: function() {
    return (
      <div className="galleryBox">
        <ModalDumbComponent data={this.state.data} produto={this.state.produto}/>
      </div>
    );
  }
});

export default ModalComponent;
