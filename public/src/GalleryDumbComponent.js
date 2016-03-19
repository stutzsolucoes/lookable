import React from 'react';
import GalleryListItem from './GalleryListItem.js';

var GalleryDumbComponent = React.createClass({

  getInitialState: function() {
    return {category: 'featured'};
  },

  componentWillMount: function() {
    _globalState.addCurrentCategoryChangedListener(this.categoryChangedListener);
  },

  componentDidUpdate: function() {
    //Gambiarra para poder usar o historico do navegador (botao de voltar) e isso fazer o modal fechar
    jQuery(".portfolio-link-gallery").each(function(idx, link) {
      jQuery(link).on("click", function() {
        history.pushState({id: jQuery(this).attr("data-url-description"), origin: "home"}, 'look', jQuery(this).attr("data-url-description"));
      })
    });

  },

  categoryChangedListener: function(newCategory){
    this.setState({category: newCategory});
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
