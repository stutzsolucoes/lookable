import React from 'react';

var ModalDumbComponent = React.createClass({

  getInitialState: function() {
    return {data: [],
            produto: []};
  },


  render: function() {
    var produtoNodes = this.props.produto.map(function(item) {
      return (
        <div className="col-lg-4" key={item.id}>
            <img className="img-responsive img-centered itens" src={item.get("url_imagem")} alt="" />
            <ul className="list-inline">
                <li><strong>{item.get("nome")}</strong></li>
                <li>R$ {item.get("preco")}</li>
            </ul>
            <button type="button" className="btn btn-primary" data-dismiss="modal">Comprar</button>
        </div>
      );
    });

    var modalNodes = this.props.data.map(function(modal) {
    return (
      <div className="portfolio-modal modal fade" id={modal.id} key={modal.id} tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                  <div className="lr">
                      <div className="rl">
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8 col-lg-offset-2">
                          <div className="modal-body">

                              <h2>{modal.get("titulo")}</h2>
                              <p className="item-intro text-muted">{modal.get("descricao")}.</p>
                              <img className="img-responsive img-centered img-look" src={modal.get("url_imagem")} alt={modal.get("titulo")} />

                              <div className="row">
                                  {produtoNodes}
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  });

  return (
    <div className="modalList">
        {modalNodes}
    </div>
  );
  }

});

export default ModalDumbComponent;
