import React from 'react';

var ModalDumbComponent = React.createClass({

  getInitialState: function() {
    return {produto: []};
  },

  componentDidMount:function() {
      var produtos = this.props.look.relation('produtos');
      produtos.query().find({
        success: function(produtos){
          this.setState({produto: produtos});
        }.bind(this),
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
      });
  },

  componentDidUpdate: function() {
    //Gambiarra para que a URL do navegador fique no "/" ao fechar o modal, representando que está na home
    jQuery(".close-modal").on("click", function() {
      history.pushState({id: "home"}, "Home", "/");
    });
  },

  render: function() {
      var produtoNodes = this.state.produto.map(function(item) {
        return (
          <div className="col-lg-4" key={item.id}>
              <img className="img-responsive img-centered itens" src={item.get("url_imagem")} alt="" />
              <ul className="list-inline">
                  <li><strong>{item.get("nome")}</strong></li>
                  <li>R$ {item.get("preco")}</li>
              </ul>
              <a href={item.get("url_loja")} target="_blank" title={item.get("nome")+" R$ "+item.get("preco")}>
                <button type="button" className="btn btn-primary">Comprar</button>
              </a>
          </div>
        );
      });

      return (
        <div className="portfolio-modal modal fade" id={this.props.look.id} tabindex="-1" role="dialog" aria-hidden="true">
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

                                <h2>{this.props.look.get("titulo")}</h2>
                                <p className="item-intro text-muted">{this.props.look.get("descricao")}.</p>
                                <img className="img-responsive img-centered img-look" src={this.props.look.get("url_imagem")} alt={this.props.look.get("titulo")} />

                                <div className="html-content" dangerouslySetInnerHTML={{__html: this.props.look.get("html_content")}} />

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
  }
});

export default ModalDumbComponent;
