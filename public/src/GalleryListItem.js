import React from 'react';

var GalleryListItem = React.createClass({

  render: function() {

    return (
        <div className="col-md-4 col-sm-6 portfolio-item" >
            <a href={"#"+this.props.look.id} className="portfolio-link portfolio-link-gallery" data-toggle="modal" data-url-description={"#"+this.props.look.id}>
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                        <i className="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img src={this.props.look.get("url_imagem")} className="img-responsive img-centered" alt="" />
            </a>
            <div className="portfolio-caption">
                <h4>{this.props.look.get("titulo")}</h4>
            </div>
        </div>
    );
  }
});

export default GalleryListItem;
