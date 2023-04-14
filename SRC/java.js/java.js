//essa função impede que após o envio do formulário a página recarregue  
function submitForm(event) {
    event.preventDefault();

     // Selecionei os campos do formulário utilizando uma const

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    //para conferir se os campos de "senha" e "confirmar senha" são iguais:
    if (password === confirmPassword) {
      alert('Cadastro realizado com sucesso!');
      console.log('cadastro concluido')
    }
    else {
      alert('Senhas não conferem. Tente novamente.');
      return;
    }
    // Redireciona o usuário para a página principal após o cadastro
    window.location.replace("../index.html")

  }
  
  //este código faz com que haja a validação do formulário do usuário apenas quando ele clicar em "enviar" ou apertar "enter"
  const form = document.querySelector('form');
  form.addEventListener('submit', submitForm);
  

//criando negrito quando clica no elemento de navegação

// Selecionar todos os elementos de navegação
const elementosDeNavegacao = document.querySelectorAll('nav ul li a');

// Adicionar um evento de clique a cada elemento de nav
elementosDeNavegacao.forEach(elemento => {
  elemento.addEventListener('click', function(evento) {
    // Evite que o link seja seguido
    evento.preventDefault();

    // Remova a classe "ativo" de todos os elementos de nav
    elementosDeNavegacao.forEach(elemento => {
      elemento.classList.remove('ativo');
    });

    // Adiciona a classe "ativo" ao elemento de navegação que for clicado
    this.classList.add('ativo');
  });
});