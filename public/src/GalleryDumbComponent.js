import React from 'react';

var GalleryDumbComponent = React.createClass({

  getInitialState: function() {
    return {data: []};
  },

  render: function() {
    var galleryNodes = this.props.data.map(function(looks) {

      return (
        <div className="col-md-4 col-sm-6 portfolio-item" key={looks.id}>
            <a href={"#"+looks.id} className="portfolio-link" data-toggle="modal">
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                        <i className="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img src={looks.get("url_imagem")} className="img-responsive img-centered" alt="" />
            </a>
            <div className="portfolio-caption">
                <h4>{looks.get("titulo")}</h4>
            </div>
        </div>
      );
    });
    return (
      <div className="lookList">
        {galleryNodes}
      </div>
    );
  }
});

export default GalleryDumbComponent;
