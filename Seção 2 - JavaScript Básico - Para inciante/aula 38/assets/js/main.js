const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

//Coloquei a cor do parafrafo da mesma cor do funda do site
for (let p of ps) {
    //acessando o stylo do paragrafo
    p.style.backgroundColor = backgroundColorBody;
}