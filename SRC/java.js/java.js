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
    }
    else {
      alert('Senhas não conferem. Tente novamente.');
      return;
    }
    // Redireciona o usuário para a página principal após o cadastro
    window.location.replace("../index.html")

     console.log('cadastro concluido')
  }
  
  //este código faz com que haja a validação do formulário do usuário apenas quando ele clicar em "enviar" ou apertar "enter"
  const form = document.querySelector('form');
  form.addEventListener('submit', submitForm);
  