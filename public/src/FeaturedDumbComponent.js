import React from 'react';

var FeaturedDumbComponent = React.createClass({

  getInitialState: function() {
    return {data: [],
            produto: []};
  },

  render: function() {
    var featNodes = this.props.data.map(function(feat) {
      var timelineImage = {
          backgroundImage: 'url('+feat.get("url_imagem")+')'
      };
      return (
        <div key={feat.id}>
          <a href={"#"+feat.id} className="portfolio-link" data-toggle="modal">
            <div className="timeline-image" style={timelineImage}>

            </div>
          </a>
          <div className="timeline-panel" >
              <a href={"#"+feat.id} className="portfolio-link" data-toggle="modal">
                <div className="look-novo">
                    <button type="button" className="btn btn-primary" >{feat.createdAt.toLocaleString().slice(0,10)}</button>
                </div>
              </a>
              <div className="timeline-heading">
                  <h4>{feat.get("titulo")}</h4>
              </div>
              <div className="timeline-body">
                  <p className="text-muted">{feat.get("descricao")}</p>
              </div>
          </div>
        </div>
      );
    });

    var itensNodes = this.props.produto.map(function(item){
        return (
              <div className="col-lg-3 col-xs-3" key={item.id}>
                <a href={item.get("url_loja")} target="_blank" title={item.get("nome")+" R$ "+item.get("preco")}>
                  <img className="img-responsive img-centered" src={item.get("url_imagem")} alt={item.get("nome")} />
                </a>
              </div>
        );
    });

    return (
      <div className="featList">
        {featNodes}
        <div className="timeline-panel itens row">
          {itensNodes}
        </div>
      </div>
    );
  }
});

export default FeaturedDumbComponent;
/*
<ul className="list-inline">
  <li><strong></strong></li> </br>
  <li></li>
</ul>
*/
