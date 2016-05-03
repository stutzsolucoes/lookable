import React from 'react';

var FeaturedDumbComponent = React.createClass({

  getInitialState: function() {
    return {data: [],
            produto: []};
  },

  componentDidUpdate: function() {
    //Gambiarra para poder usar o historico do navegador (botao de voltar) e isso fazer o modal fechar
    jQuery(".portfolio-link-feat").each(function(idx, link) {
      jQuery(link).on("click", function() {
        history.pushState({id: jQuery(this).attr("data-url-description"), origin: "home"}, 'look', jQuery(this).attr("data-url-description"));
      })
    });

  },


  render: function() {
    var featNodes = this.props.data.map(function(feat) {
      var timelineImage = {
          backgroundImage: 'url('+feat.get("url_imagem")+')'
      };
      return (
        <div key={feat.id}>
          <a href={"#"+feat.id} className="portfolio-link portfolio-link-feat" data-toggle="modal" data-url-description={"#"+feat.id}>
            <div className="timeline-image" style={timelineImage}>

            </div>
          </a>
          <div className="timeline-panel" >
              <a href={"#"+feat.id} className="portfolio-link portfolio-link-feat" data-toggle="modal" data-url-description={"#"+feat.id}>
                <div className="look-novo">
                    <button type="button" className="btn btn-primary" >{feat.createdAt.toLocaleString().slice(0,10)}</button>
                </div>
              </a>
              <div className="timeline-heading">
                  <h4>{feat.get("titulo")}</h4>
              </div>
              <div className="timeline-body">
                  <p className="text-muted">{feat.get("descricao")}...</p> <br />
                  <a href={"#"+feat.id} className="portfolio-link-feat" data-toggle="modal" data-url-description={"#"+feat.id}>
                      <strong>Continue lendo</strong>
                  </a>
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
          <div className="mailchimp-form">
              {/* Begin MailChimp Signup Form */}
              <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />
              <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n\t/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n" }} />
              <div id="mc_embed_signup">
                <form action="//stutzsolucoes.us7.list-manage.com/subscribe/post?u=e143f3fc9fb806387f5433cd3&id=519496764a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                  <div id="mc_embed_signup_scroll">
                    <label htmlFor="mce-EMAIL">Receba semanalmente no seu email</label>
                    <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email" required />
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_e143f3fc9fb806387f5433cd3_519496764a" tabIndex={-1} defaultValue /></div>
                    <div className="clear"><input type="submit" defaultValue="Assinar" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                  </div>
                </form>
              </div>
              {/*End mc_embed_signup*/}
          </div>
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
