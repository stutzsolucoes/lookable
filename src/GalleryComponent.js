import React from 'react';
import GalleryDumbComponent from './GalleryDumbComponent.js';

var GalleryComponent = React.createClass({

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount:function() {
    var Look = Parse.Object.extend("Look");
    var query = new Parse.Query(Look);
    query.descending("createdAt");
    query.find({
      success: function(results){
        this.setState({data: results});
      }.bind(this),
      error: function(error) {
          alert("Error: " + error.code + " " + error.message);
      }
    });
  },

  render: function() {
    return (
      <div className="galleryBox">
        <GalleryDumbComponent data={this.state.data}/>
      </div>
    );
  }
});

export default GalleryComponent;
