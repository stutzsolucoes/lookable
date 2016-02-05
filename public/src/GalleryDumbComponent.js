import React from 'react';
import GalleryListItem from './GalleryListItem.js';

var GalleryDumbComponent = React.createClass({

  getInitialState: function() {
    return {data: []};
  },

  render: function() {
    var galleryNodes = this.props.data.map(function(looks) {
      return (
        <div key={looks.id} >
              <GalleryListItem look={looks} />
        </div>
      );
    });
    return (
        <div className="row">
          {galleryNodes}
        </div>
    );
  }
});

export default GalleryDumbComponent;
