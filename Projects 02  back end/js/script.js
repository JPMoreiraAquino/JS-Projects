function meuEscopo () {
    const form = document.querySelector('.form');
    const Resultado = document.querySelector('.Resultado')

    const pessoas = [];

    function recebeEventoForm (evento) {
      evento.preventDefault();

      const Nome = form.querySelector('.Nome');
      const Sobrenome = form.querySelector('.Sobrenome')
      const Peso = form.querySelector('.Peso');
      const Altura = form.querySelector('.Altura');

    pessoas.push({
        Nome: Nome.value,
        Sobrenome: Sobrenome.value, 
        Peso: Peso.value,    
        Altura: Altura.value,
    
    });
    console.log(pessoas);
    Resultado.innerHTML += `<p>${Nome.value} ${Sobrenome.value} ` +
    `${Peso.value} ${Altura.value}</p>`;
    };
form.addEventListener('submit', recebeEventoForm);
};
meuEscopo();