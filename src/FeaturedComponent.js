import React from 'react';
import FeaturedDumbComponent from './FeaturedDumbComponent.js';

var FeaturedComponent = React.createClass({

  getInitialState: function() {
    return {data: [],
            produto: []};
  },

  componentDidMount:function() {
    var Look = Parse.Object.extend("Look");
    var query = new Parse.Query(Look);
    query.descending("createdAt");
    query.limit(1);
    query.find({
      success: function(results){
        this.setState({data: results});

        var look = results[0];
        var produtos = look.relation('produtos');
        produtos.query().find({
          success: function(produtos){
            this.setState({produto: produtos});
          }.bind(this)
        })
      }.bind(this),
      error: function(error) {
          alert("Error: " + error.code + " " + error.message);
      }
    });
    /*
    var Produto = Parse.Object.extend("Produto");
    query = new Parse.Query(Produto);
    query.include("look");
    query.find({
      success: function(produtos){
        this.setState({produto: produtos});
      }.bind(this)
    });
    */
  },

  render: function() {
    return (
      <div className="featuredComponentBox">
        <FeaturedDumbComponent data={this.state.data} produto={this.state.produto}/>
      </div>
    );
  }
});

export default FeaturedComponent;
