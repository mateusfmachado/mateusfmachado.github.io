(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(7),r=t.n(c),s=(t(14),t(1)),i=t(2),o=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"TopBar"},n.a.createElement("div",{className:"container-big"},n.a.createElement("div",{className:"flex horizontal-only"},n.a.createElement("div",{className:"flex-1 item"},n.a.createElement("i",{className:"fab fa-facebook-f"}),n.a.createElement("span",null,"FACEBOOK")),n.a.createElement("div",{className:"flex-2 flex flex-end"},n.a.createElement("div",{className:"item"},n.a.createElement("i",{className:"fas fa-dot"}),n.a.createElement("span",null,"QUEM SOMOS")),n.a.createElement("div",{className:"item"},n.a.createElement("i",{className:"fas fa-dot"}),n.a.createElement("span",null,"FALE CONOSCO"))))))}}]),a}(l.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Header"},n.a.createElement("div",{className:"container-big wrapper-header"},n.a.createElement("div",{className:"flex horizontal"},n.a.createElement("div",{className:"flex-1 flex flex-center"},n.a.createElement("img",{className:"flex-1 logo",src:"".concat("/desafio-ecommerce/desafio14","/image/logo1.png")}),n.a.createElement("div",{className:"only-mb flex-1 flex horizontal-only itens-header"},n.a.createElement("div",{className:"flex-2 flex flex-center"},n.a.createElement("img",{src:"".concat("/desafio-ecommerce/desafio14","/image/icone-sacola.png")}),n.a.createElement("span",{className:"cart-number"},"0")),n.a.createElement("div",{className:"flex-2 flex flex-center"},n.a.createElement("i",{className:"fas fa-arrow-right"}),n.a.createElement("span",null,"\xa0Entrar")))),n.a.createElement("div",{className:"flex-3 flex horizontal-only flex-center"},n.a.createElement("input",{name:"pesquisa",placeholder:"Digite aqui o que est\xe1 procurando...",className:"input-pesquisa"}),n.a.createElement("button",{className:"btn-pesquisa"},n.a.createElement("i",{className:"fas fa-search"}))),n.a.createElement("div",{className:"flex-2 flex horizontal-only flex-center"},n.a.createElement("div",{className:"no-mb flex horizontal-only itens-header"},n.a.createElement("div",{className:"flex-2 flex flex-center"},n.a.createElement("img",{src:"".concat("/desafio-ecommerce/desafio14","/image/icone-sacola.png")}),n.a.createElement("span",{className:"cart-number"},"0")),n.a.createElement("div",{className:"flex-2 flex flex-center"},n.a.createElement("i",{className:"fas fa-arrow-right"}),n.a.createElement("span",null,"\xa0Entrar")),n.a.createElement("div",{className:"flex-3 flex flex-center"},n.a.createElement("div",{className:"aviso-wpp"},n.a.createElement("i",{className:"fab fa-whatsapp"}),n.a.createElement("span",null,"(11) 98526-3642"))))))))}}]),a}(l.Component),f=[{icon:"".concat("/desafio-ecommerce/desafio14","/image/icone-1_1.png"),categoria:"VITAMINAS"},{icon:"".concat("/desafio-ecommerce/desafio14","/image/icone-2_1.png"),categoria:"SUPLEMENTOS"},{icon:"".concat("/desafio-ecommerce/desafio14","/image/icone-3_1.png"),categoria:"GRANEL"},{icon:"".concat("/desafio-ecommerce/desafio14","/image/icone-4_1.png"),categoria:"ALIMENTOS"},{icon:"".concat("/desafio-ecommerce/desafio14","/image/icone-5_1.png"),categoria:"BELEZA"},{icon:"".concat("/desafio-ecommerce/desafio14","/image/icone-6_1.png"),categoria:"MAIS CATEGORIAS"}],p=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Categorias"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"cateogorias flex horizontal-only overflow-x"},f.map(function(e,a){return n.a.createElement("div",{key:a,className:"categoria-item flex-1 flex flex-center"},n.a.createElement("img",{src:e.icon}),n.a.createElement("span",null,e.categoria))}))))}}]),a}(l.Component),v=["".concat("/desafio-ecommerce/desafio14","/image/pic-1.png"),"".concat("/desafio-ecommerce/desafio14","/image/pic-2.jpeg")],N=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={pic:v[0]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"renderFotos",value:function(){var e=this,a=this.state.pic;return n.a.createElement("div",{className:"flex-5 flex vertical"},n.a.createElement("div",{className:"main-pic-container flex-5 flex flex-center"},n.a.createElement("img",{src:a,className:"main-pic"})),n.a.createElement("div",{className:"mini-pics-container flex-1 flex horizontal flex-center"},v.map(function(a,t){return n.a.createElement("div",{key:t,onClick:function(){return e.setState({pic:a})},className:"mini-pic-container flex-1 flex flex-center"},n.a.createElement("img",{src:a,width:"95%",className:"mini-pic"}))})))}},{key:"renderData",value:function(){return n.a.createElement("div",{className:"flex-4 flex vertical detalhes"},n.a.createElement("div",{className:"flex vertical produto-detalhes"},n.a.createElement("h2",null,"Cloreto De Magn\xe9sio Pa 120 C\xe1psulas 500Mg - Meissen"),n.a.createElement("small",null,"Marca: Meissen"),n.a.createElement("small",null,"Modelo: Pa"),n.a.createElement("small",null,"Refer\xeancia: MS02")),n.a.createElement("div",{className:"hr"}),n.a.createElement("div",{className:"precos flex vertical"},n.a.createElement("h2",null,"R$ 27,46",n.a.createElement("small",null,"\xa0por boleto")),n.a.createElement("span",null,"ou 3x de R$ 9,63 no cart\xe3o")),n.a.createElement("div",{className:"opcoes"},n.a.createElement("div",{className:"opcao flex vertical"},n.a.createElement("label",null,"Quantidade"),n.a.createElement("input",{name:"quantidade",type:"number",value:"1"}))),n.a.createElement("div",{className:"ctas flex vertical"},n.a.createElement("button",{className:"btn-cta"},"ADICIONAR \xc0 SACOLA")),n.a.createElement("div",{className:"hr"}),n.a.createElement("div",{className:"cep-container"},n.a.createElement("h4",null,"Qual o valor do frete?"),n.a.createElement("div",{className:"cep-data"},n.a.createElement("label",null,"CEP:"),n.a.createElement("input",{name:"cep",placeholder:"00000-000"}),n.a.createElement("button",{className:"btn-cep"},"CALCULAR"))))}},{key:"render",value:function(){return n.a.createElement("div",{className:"HeroShop"},n.a.createElement("div",{className:"container-big"},n.a.createElement("div",{className:"flex vertical"},n.a.createElement("div",{className:"breadcrumbs"},n.a.createElement("span",null,"P\xe1gina inicial > Vitaminas > Magn\xe9sio > Cloreto De Magn\xe9sio Pa 120 C\xe1psulas 500Mg - Meissen"),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("div",{className:"flex horizontal"},this.renderFotos(),this.renderData()))))}}]),a}(l.Component),x=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Descricao"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"flex vertical"},n.a.createElement("div",null,n.a.createElement("h2",null,"Descri\xe7\xe3o"),n.a.createElement("br",null)),n.a.createElement("div",null,n.a.createElement("span",null,"O Cloreto de Magn\xe9sio P.A. 500mg 120 C\xe1psulas Meissen \xe9 um suplemento mineral de fundamental import\xe2ncia."),n.a.createElement("br",null),n.a.createElement("span",null,"Isso porque ele age de maneira a trazer diversos benef\xedcios para o corpo e para a sa\xfade."),n.a.createElement("br",null),n.a.createElement("span",null,"Ele \xe9 feito com Cloreto de Magn\xe9sio P.A. e Antiumectante (celulose microcristalina e di\xf3xido de sil\xedcio)."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",null,"O uso do Cloreto de Magn\xe9sio P.A. 500mg 120 C\xe1psulas Meissen traz v\xe1rios benef\xedcios a sua sa\xfade. S\xe3o eles:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Combate aos efeitos de problemas como artrite e artrose;"),n.a.createElement("li",null,"Relaxamento dos m\xfasculos;"),n.a.createElement("li",null,"Relaxamento das art\xe9rias;"),n.a.createElement("li",null,"Relaxamento nos nervos excitados;"),n.a.createElement("li",null,"Contra\xe7\xe3o dos m\xfasculos atrav\xe9s da a\xe7\xe3o do c\xe1lcio.")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",null,"O uso recomendado do produto \xe9 de duas c\xe1psulas ao dia, sempre acompanhada da ingest\xe3o de l\xedquido. "),n.a.createElement("span",null,"Ingredientes: Cloreto de Magn\xe9sio P.A., Antiumectante (celulose microcristalina e di\xf3xido de sil\xedcio)."))),n.a.createElement("br",null),n.a.createElement("br",null)))}}]),a}(l.Component),b=[{texto:"Muito bom, gostei demais.",data:"10/04/2019",nome:"Lucas"},{texto:"\xd3timo produto, funcionou muito bem e chegou rapidamente.",data:"10/04/2019",nome:"Ana"},{texto:"Bem f\xe1cil de montar e chegou muito r\xe1pido.",data:"10/04/2019",nome:"Joana"}],g=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"renderComentarios",value:function(){return n.a.createElement("div",{className:"comentarios flex horizontal"},b.map(function(e,a){return n.a.createElement("div",{className:"comentario flex-1 flex vertical"},n.a.createElement("div",{className:"mensagem"},n.a.createElement("span",null,e.texto)),n.a.createElement("div",{className:"dados flex flex-end"},n.a.createElement("span",{className:"dados-data"},e.data," -\xa0"),n.a.createElement("span",{className:"dados-nome"},e.nome)))}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"Comentarios"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"flex vertical"},n.a.createElement("div",null,n.a.createElement("h2",null,"Coment\xe1rios")),this.renderComentarios())))}}]),a}(l.Component),h=[{img:"".concat("/desafio-ecommerce/desafio14","/image/pic-related-1.jpg"),titulo:"3x Magn\xe9sio Dimalato - 180 C\xe1psulas - 2x Dia",preco:"R$ 59,40",precoSub:"ou 3x de R$ 19,80 sem juros"},{img:"".concat("/desafio-ecommerce/desafio14","/image/pic-related-2.jpg"),titulo:"3 Magn\xe9sio Dimalato Puro - 180 C\xe1psulas - 2x Dia - Meissen",preco:"R$ 58,50",precoSub:"ou 3x de R$ 19,50 sem juros"},{img:"".concat("/desafio-ecommerce/desafio14","/image/pic-related-3.jpg"),titulo:"Cloreto de Magnesio Pa 1 Kg + Sal Rosa do Himalaia 1 Kg",preco:"R$ 42,00",precoSub:"ou 3x de R$ 14,00 sem juros"},{img:"".concat("/desafio-ecommerce/desafio14","/image/pic-related-4.jpg"),titulo:"Kit 5 Cloreto de Magn\xe9sio Pa 120 C\xe1psulas 800Mg",preco:"R$ 132,50",precoSub:"ou 3x de R$ 44,17 sem juros"}],O=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"renderProdutosRecomendados",value:function(){return n.a.createElement("div",{className:"produtos flex horizontal"},h.map(function(e,a){return n.a.createElement("div",{key:a,className:"produto flex-1 flex vertical"},n.a.createElement("div",{className:"produto-imagem flex flex-center"},n.a.createElement("img",{src:e.img})),n.a.createElement("div",{className:"produto-titulo"},n.a.createElement("h3",null,e.titulo)),n.a.createElement("div",{className:"produto-precos flex vertical flex-center"},n.a.createElement("h3",null,e.preco),n.a.createElement("span",null,e.precoSub)))}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"ProdutosRecomendados"},n.a.createElement("div",{className:"container-big"},n.a.createElement("div",{className:"flex vertical"},n.a.createElement("div",{className:"flex flex-center"},n.a.createElement("h2",{className:"text-center titulo-sub"},"Voc\xea tamb\xe9m pode gostar...")),this.renderProdutosRecomendados())))}}]),a}(l.Component),j=[{img:"".concat("/desafio-ecommerce/desafio14","/image/pic-1.png"),titulo:"Cloreto De Magn\xe9sio Pa 120 C\xe1psulas 500Mg - Meissen",preco:"R$ 27,46",precoSub:"ou 3x de R$ 9,63 sem juros"}],C=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"renderProdutosVisitados",value:function(){return n.a.createElement("div",{className:"produtos flex horizontal"},j.map(function(e,a){return n.a.createElement("div",{key:a,className:"produto flex-1 flex vertical"},n.a.createElement("div",{className:"produto-imagem flex flex-center"},n.a.createElement("img",{src:e.img})),n.a.createElement("div",{className:"produto-titulo"},n.a.createElement("h3",null,e.titulo)),n.a.createElement("div",{className:"produto-precos flex vertical flex-center"},n.a.createElement("h3",null,e.preco),n.a.createElement("span",null,e.precoSub)))}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"ProdutosVisitados"},n.a.createElement("div",{className:"container-big"},n.a.createElement("div",{className:"flex vertical"},n.a.createElement("div",{className:"flex flex-center"},n.a.createElement("h2",{className:"text-center titulo-sub"},"Produtos Visitados")),this.renderProdutosVisitados())))}}]),a}(l.Component),A=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Institucional"},n.a.createElement("div",{className:"container-big "},n.a.createElement("div",{className:"flex horizontal"},n.a.createElement("div",{className:"institucional-item flex-1 flex vertical"},n.a.createElement("img",{className:"logo-footer",src:"".concat("/desafio-ecommerce/desafio14","/image/logo.png")})),n.a.createElement("div",{className:"institucional-item flex-1 flex vertical"},n.a.createElement("h3",null,"Institucional"),n.a.createElement("br",null),n.a.createElement("span",null,"EMPRESA"),n.a.createElement("span",null,"COMO COMPRAR"),n.a.createElement("span",null,"SEGURAN\xc7A"),n.a.createElement("span",null,"ENVIO"),n.a.createElement("span",null,"PAGAMENTO"),n.a.createElement("span",null,"TEMPO DE GARANTIA"),n.a.createElement("span",null,"DEPOIMENTO DE CLIENTES"),n.a.createElement("span",null,"TROCAS E DEVOLU\xc7\xd5ES")),n.a.createElement("div",{className:"institucional-item flex-1 flex vertical"},n.a.createElement("h3",null,"Mais Vendidos"),n.a.createElement("br",null),n.a.createElement("span",null,"VITAMINAS"),n.a.createElement("span",null,"SUPLEMENTOS"),n.a.createElement("span",null,"GRANEL"),n.a.createElement("span",null,"ALIMENTOS"),n.a.createElement("span",null,"BELEZA"),n.a.createElement("span",null,"MAIS CATEGORIAS")),n.a.createElement("div",{className:"institucional-item flex-1 flex vertical"},n.a.createElement("h3",null,"Contato"),n.a.createElement("br",null),n.a.createElement("div",{className:"flex flex-start"},n.a.createElement("i",{className:"fas fa-clock"}),n.a.createElement("span",null,"SEGUNDA A SEXTA 9H \xc0S 17H")),n.a.createElement("div",{className:"flex flex-start"},n.a.createElement("i",{className:"fas fa-phone"}),n.a.createElement("span",null,"(11) 98526-3642")),n.a.createElement("div",{className:"flex flex-start"},n.a.createElement("i",{className:"fas fa-envelope"}),n.a.createElement("span",null,"ATENDIMENTO@NATUEU.COM.BR"))))))}}]),a}(l.Component),y=[1,2,3,4,5,6,7,8,9,10,11,12,13,14],M=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"renderPagamentos",value:function(){return n.a.createElement("div",{className:"flex-1 flex horizontal-only overflow-x"},y.map(function(e,a){return n.a.createElement("div",{key:a,className:"cartao"},n.a.createElement("img",{src:"".concat("/desafio-ecommerce/desafio14","/image/pagamento/").concat(e,".png")}))}))}},{key:"renderSelos",value:function(){return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("img",null)))}},{key:"render",value:function(){return n.a.createElement("div",{className:"FormasDePagamento"},n.a.createElement("div",{className:"container-big"},n.a.createElement("div",{className:"flex-1 flex horizontal-only"},this.renderPagamentos())))}}]),a}(l.Component),S=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Footer"},n.a.createElement("div",{className:"container-big"},n.a.createElement("div",{className:"flex vertical"},n.a.createElement("small",null,"\xa9",(new Date).getFullYear(),". Ampliee - TESTE // Todos os direitos reservados a NatuEu -"))))}}]),a}(l.Component),R=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(d,null),n.a.createElement(E,null),n.a.createElement(p,null),n.a.createElement(N,null),n.a.createElement(x,null),n.a.createElement(g,null),n.a.createElement(O,null),n.a.createElement(C,null),n.a.createElement(A,null),n.a.createElement(M,null),n.a.createElement(S,null))}}]),a}(l.Component);r.a.render(n.a.createElement(R,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.eafe8b28.chunk.js.map