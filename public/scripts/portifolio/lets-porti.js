let spanPortifolio = document.querySelector("#span-portifolio");

let spanContactFooter = document.querySelector("#span-contactFooter");
let spanSend = document.querySelector("#span-send");
let spanCopy = document.querySelector("#span-copy");

let spanPt =  '<img src="./assets/willweb_Images/br.png" style="width: 15px;"> Português'
let spanEn = '<img src="./assets/willweb_Images/en.png" style="width: 15px;"> English'

let spans = ["spanPortifolio", "spanContactFooter", "spanSend", "spanCopy"];

let portifolioPt = [projetoPt("my-site",
              "./assets/img-portifolio/my-site.png",
              "Meu Site",
              "Site desenvolvido para mostrar aos clientes e futuros clientes todos os projetos desenvolvimento pela agência WillWeb.",
              "https://willweb-v2.herokuapp.com/",
              "https://github.com/williansamer/willweb-v2-node",
              "Parte Visual - WillWeb",
              "GitHub - WillWeb"
            ),
            projetoPt("willffer",
              "./assets/img-portifolio/willffer.png",
              "Estância Willffer",
              "Projeto feito para mostrar todas as qualidades da estância por completo. Imagens e benefícios que a Rede Social não alcança.",
              "https://williansamer.github.io/estancia-v2/",
              "https://github.com/williansamer/estancia-v2",
              "Parte Visual - Estância",
              "GitHub - Estância"
            ),
            projetoPt("slide-show",
              "./assets/img-portifolio/slide-show.png",
              "Slide Show",
              "Design chamativo e agradável com objetivo de mostrar a imagem do produto. Versatilidade para o cliente verificar o que tanto deseja.",
              "https://williansamer.github.io/estancia-v2/pag_imagens/index.html",
              "https://github.com/williansamer/estancia-v2/tree/master/pag_imagens",
              "Parte Visual - Slide Show",
              "GitHub - Slide Show"
            ),
            projetoPt("churrascometro",
              "./assets/img-portifolio/churrascometro.png",
              "Churrascômetro",
              "Projeto a pedido do cliente para calcular diretamente do site a quantidade de carnes e bebidas na hora de churrasquear.",
              "https://williansamer.github.io/estancia-v2/Churrascometro/index.html",
              "https://github.com/williansamer/estancia-v2/tree/master/Churrascometro",
              "Parte Visual - Churrascômetro",
              "GitHub - Churrascômetro"
            ),
            projetoPt("jogo-da-memoria",
              "./assets/img-portifolio/jogo-da-memoria.png",
              "Jogo da Memória",
              "Jogo com transições em 3D nas cartas. Com ranking no final para desafiar o competidor a ser melhor que seus rivais.",
              "https://williansamer.github.io/memoria-game/",
              "https://github.com/williansamer/memoria-game",
              "Parte Visual - Jogo da Memória",
              "GitHub - Jogo da Memória"
            ),
            projetoPt("jogo-da-velha",
              "./assets/img-portifolio/jogo-da-velha.png",
              "Jogo da Velha",
              "Jogo simples para brincar um contra o outro.",
              "https://williansamer.github.io/Jogo-da-velha/",
              "https://github.com/williansamer/Jogo-da-velha",
              "Parte Visual - Jogo da Velha",
              "GitHub - Jogo da Velha"
            ),
            projetoPt("urna-eletronica",
              "./assets/img-portifolio/urna-eletronica.png",
              "Urna Eletrônica",
              "Cópia fiel da urna eletrônica(Sistema brasileiro de votação) com todos os dispositivos funcionando. Ótimo para praticar nas vésperas da votação",
              "https://williansamer.github.io/urna-eletronica/",
              "https://github.com/williansamer/urna-eletronica",
              "Parte Visual - Urna Eletrônica",
              "GitHub - Urna Eletrônica"
            ),
            projetoPt("pag-captura",
              "./assets/img-portifolio/pag-captura.png",
              "Página de Captura",
              "Landing Page. Primeiro trabalho desenvolvido pela agency WillWeb. Vale à pena acrescentá-lo.",
              "https://williansamer.github.io/pagina-captura/",
              "https://github.com/williansamer/pagina-captura",
              "Parte Visual - Página de Captura",
              "GitHub - Página de Captura"
            ),
            projetoPt("api-cep",
              "./assets/img-portifolio/api-cep.png",
              "Captura de CEP por API",
              "Formulário com sistema API para detectar qualquer endereço no Brasil com um CEP real.",
              "https://williansamer.github.io/api_CEP/",
              "https://github.com/williansamer/api_CEP",
              "Parte Visual - CEP-api",
              "GitHub - CEP-api"
            ),
            projetoPt("formulario",
              "./assets/img-portifolio/formulario.png",
              "Formulário",
              "Formulário com sistema de verificação de erro e alguns campos a serem preenchidos de modo obrigatório.",
              "https://williansamer.github.io/formulario/",
              "https://github.com/williansamer/formulario",
              "Parte Visual - Formulário",
              "GitHub - Formulário"
            ),
            projetoPt("posto",
              "./assets/img-portifolio/posto.png",
              "Preço dos Postos",
              "Sistema ainda em andamento com o objeto de mostrar preços dos combustíveis de uma cidade para os cidadãos com buscas selecionáveis.",
              "https://williansamer.github.io/posto-v2/",
              "https://github.com/williansamer/posto-v2",
              "Parte Visual - Posto",
              "GitHub - Posto"
            ),
            projetoPt("mural",
              "./assets/img-portifolio/mural.png",
              "Mural",
              "Desenvolvido em HTML5, Bootstrap, JavaScript e Node.js. Visa desenvolver a comunicação de qualquer grupo de pessoas como um meio único e centralizado de contato.",
              "https://lesson-mural.herokuapp.com/",
              "https://github.com/williansamer/mural",
              "Parte Visual - Mural",
              "GitHub - Mural"
            ),
            projetoPt("redirecionamento",
              "./assets/img-portifolio/redirection-links.png",
              "Links de Redirecionamento",
              "Desenvolvido principalmente em EJS, JavaScript, Node e MongoBR. Objetivo de linkar com outros diferentes sites partindo do meu domínio com um sistema de CLICKS.",
              "https://redirection-links.herokuapp.com/",
              "https://github.com/williansamer/clicks-systems",
              "Parte Visual - Links de Redirecionamento",
              "GitHub - Links de Redirecionamento"
            ),
            projetoPt("chat",
            "./assets/img-portifolio/chat.png",
            "Chat",
            "Desenvolvido com o objetivo de obter comunicação entre o FRONT e BACK usando o 'socket.io'. É um chat com salas de conversação onde adquiri bons conhecimentos da ferramenta.",
            "https://chat-willian.herokuapp.com/",
            "https://github.com/williansamer/chat",
            "Parte Visual - Chat",
            "GitHub - Chat"
          )]

function projetoPt(nome, imagem, titulo, descricao, link1, link2, txtlink1, txtlink2){
  return {nome, imagem, titulo, descricao, link1, link2, txtlink1, txtlink2};
}

let portifolioEn = [projetoEn("my-site",
              "./assets/img-portifolio/my-site.png",
              "My Website",
              "WebSite created to show clients and future clients all projects developed by the WillWeb agency.",
              "https://williansamer.github.io/willweb-v2/",
              "https://github.com/williansamer/willweb-v2",
              "Visual Part - WillWeb",
              "GitHub - WillWeb"
            ),
            projetoEn("willffer",
              "./assets/img-portifolio/willffer.png",
              "Willffer Resort",
              "Project made to show all the qualities of the resort for whole. Images and benefits that the Social Network does not reach.",
              "https://williansamer.github.io/estancia-v2/",
              "https://github.com/williansamer/estancia-v2",
              "Visual Part - Willffer Resort",
              "GitHub - Willffer Resort"
            ),
            projetoEn("slide-show",
              "./assets/img-portifolio/slide-show.png",
              "Slide Show",
              "Eye-catching and pleasant design with the objective of showing the product's image. Versatility for the customer to see what he's looking for",
              "https://williansamer.github.io/estancia-v2/pag_imagens/index.html",
              "https://github.com/williansamer/estancia-v2/tree/master/pag_imagens",
              "Visual Part - Slide Show",
              "GitHub - Slide Show"
            ),
            projetoEn("churrascometro",
              "./assets/img-portifolio/churrascometro.png",
              "Barbecue Meter",
              "Customer-requested project to calculate directly from the website the amount of meat and beverages at the time of barbecue.",
              "https://williansamer.github.io/estancia-v2/Churrascometro/index.html",
              "https://github.com/williansamer/estancia-v2/tree/master/Churrascometro",
              "Visual Part - Barbecue Meter",
              "GitHub - Barbecue Meter"
            ),
            projetoEn("jogo-da-memoria",
              "./assets/img-portifolio/jogo-da-memoria.png",
              "Memory Game",
              "Game with 3D transitions on the cards. With ranking at the end to challenge the competitor to be better than their rivals.",
              "https://williansamer.github.io/memoria-game/",
              "https://github.com/williansamer/memoria-game",
              "Visual Part - Memory Game",
              "GitHub - Memory Game"
            ),
            projetoEn("jogo-da-velha",
              "./assets/img-portifolio/jogo-da-velha.png",
              "Tic-tac-toe",
              "Simple game to play against each other.",
              "https://williansamer.github.io/Jogo-da-velha/",
              "https://github.com/williansamer/Jogo-da-velha",
              "Visual Part - Tic-tac-toe",
              "GitHub - Tic-tac-toe"
            ),
            projetoEn("urna-eletronica",
              "./assets/img-portifolio/urna-eletronica.png",
              "Electronic Ballot Box",
              "Faithful copy of the electronic ballot box (Brazilian voting system) with all devices working. Great for practicing on the eve of voting.",
              "https://williansamer.github.io/urna-eletronica/",
              "https://github.com/williansamer/urna-eletronica",
              "Visual Part - Electronic Ballot Box",
              "GitHub - Electronic Ballot Box"
            ),
            projetoEn("pag-captura",
              "./assets/img-portifolio/pag-captura.png",
              "Page Capture",
              "Landing Page. First work developed by agency WillWeb. It is worth adding it.",
              "https://williansamer.github.io/pagina-captura/",
              "https://github.com/williansamer/pagina-captura",
              "Visual Part - Page Capture",
              "GitHub - Page Capture"
            ),
            projetoEn("api-cep",
              "./assets/img-portifolio/api-cep.png",
              "Zip Code by API",
              "Form with API system to detect any address in Brazil with a real zip code.",
              "https://williansamer.github.io/api_CEP/",
              "https://github.com/williansamer/api_CEP",
              "Visual Part - Zip Code by API",
              "GitHub - Zip Code by API"
            ),
            projetoEn("formulario",
              "./assets/img-portifolio/formulario.png",
              "Registration Page",
              "Form with an error checking system and some fields to be filled in obligatorily.",
              "https://williansamer.github.io/formulario/",
              "https://github.com/williansamer/formulario",
              "Visual Part - Registration Page",
              "GitHub -  Registration Page"
            ),
            projetoEn("posto",
              "./assets/img-portifolio/posto.png",
              "Fuel Price",
              "System still in progress with the object of showing fuel prices of a city to citizens with selectable searches.",
              "https://williansamer.github.io/posto-v2/",
              "https://github.com/williansamer/posto-v2",
              "Visual Part - Fuel Price",
              "GitHub - Fuel Price"),
            projetoEn("mural",
              "./assets/img-portifolio/mural.png",
              "Mural",
              "Developed in HTML5, Bootstrap, JavaScript and Node.js. It aims to develop communication for any group of people as a unique, centralized way of contact.",
              "https://lesson-mural.herokuapp.com/",
              "https://github.com/williansamer/mural",
              "Visual Part - Mural",
              "GitHub - Mural"),
              projetoEn("redirecionamento",
                "./assets/img-portifolio/redirection-links.png",
                "Link Redirect",
                "Mainly developed in EJS, JavaScript, Node and MongoBR. Aim to link with other different sites from my domain with a CLICKS system.",
                "https://redirection-links.herokuapp.com/",
                "https://github.com/williansamer/clicks-systems",
                "Visual Part - Link Redirect",
                "GitHub - Link Redirect"),
              projetoEn("chat",
                "./assets/img-portifolio/chat.png",
                "Chat",
                "Developed with the aim of achieving communication between FRONT and BACK using 'socket.io'. It is a chat with rooms where I get good knowledge of the tool.",
                "https://chat-willian.herokuapp.com/",
                "https://github.com/williansamer/chat",
                "Visual Part - Chat",
                "GitHub - Chat"
              )]

function projetoEn(nome, imagem, titulo, descricao, link1, link2, txtlink1, txtlink2){
  return {nome, imagem, titulo, descricao, link1, link2, txtlink1, txtlink2};
}