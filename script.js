// Função para criar cartão
function criaCartao(categoria, pergunta, resposta) {
  const cartao = document.createElement('div')
  cartao.classList.add('cartao')

  cartao.innerHTML = `
    <div class="cartao__conteudo">
      <div class="cartao__face cartao__pergunta">
        <div>
          <h3>${categoria}</h3>
          <p>${pergunta}</p>
        </div>
      </div>
      <div class="cartao__face cartao__resposta">
        <p>${resposta}</p>
      </div>
    </div>
  `

  cartao.addEventListener('click', () => {
    cartao.classList.toggle('active')
  })

  document.getElementById('cartoes-container').appendChild(cartao)
}

// Cartões fixos
criaCartao( "2", "Qual é o impacto do sucesso do Facebook na vida de Mark Zuckerberg?", "O sucesso do Facebook trouxe fama, poder e riqueza para Mark Zuckerberg, mas também gerou conflitos pessoais. Embora tenha se tornado uma das figuras mais influentes do mundo, o sucesso afetou sua vida emocional, criando solidão e afastamento de amigos e familiares.O Facebook transformou a maneira como as pessoas se conectam, mas também gerou disputas internas, como com seu cofundador Eduardo Saverin e os irmãos Winklevoss. A obsessão por sua criação resultou em isolamento, apesar das conquistas.Embora tenha alcançado seus objetivos profissionais, o preço emocional do sucesso foi alto, afetando suas relações e seu bem-estar pessoal.")
criaCartao("3", "Descreva como o filme mostra a relação entre a tecnologia e a sociedade. Quais são os principais pontos positivos e negativos dessa relação?", "O filme mostra como a tecnologia (Facebook) transforma a sociedade, conectando pessoas de maneira global, mas também criando conflitos pessoais, éticos e jurídicos.Pontos positivos: Acessibilidade, conexão global e facilidade de comunicação.Pontos negativos: Isolamento, conflitos de interesse e distorção de relacionamentos pessoais em nome do sucesso.")
criaCartao("4", "Qual é a mensagem que o filme transmite sobre a importância da ética e da responsabilidade no mundo dos negócios e da tecnologia? ", "O filme transmite que o sucesso nos negócios e na tecnologia não justifica a falta de ética. As decisões egoístas de Mark Zuckerberg e as traições no caminho para criar o Facebook refletem os perigos de agir sem responsabilidade.Mensagem: A ética e a responsabilidade são fundamentais para evitar danos a pessoas e relacionamentos, mesmo em um ambiente altamente competitivo.Minha opinião: Concordo com a mensagem, pois sem ética, o sucesso pode ser superficial e causar dano emocional e conflitos duradouros.")
