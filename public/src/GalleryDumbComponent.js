import React from 'react';
import GalleryListItem from './GalleryListItem.js';

var GalleryDumbComponent = React.createClass({

  getInitialState: function() {
    return {category: 'featured'};
  },



  render: function() {
    var rows = [];
    this.props.data.forEach(function(look){
      if (this.state.category == 'featured'){
        rows.push(<GalleryListItem look={look} />);
      }else if (look.get("categoria") == this.state.category) {
        rows.push(<GalleryListItem look={look} />);
      }
    }.bind(this));
    return (
        <div className="row">
          {rows}
        </div>
    );
  }
});

export default GalleryDumbComponent;
