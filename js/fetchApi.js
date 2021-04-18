export default function fetchApi(){
  fetch("../api/perguntas.json")
  .then(r => {
    return r.json()
  })
  .then(r => {
    criarElemento(r)
  })

  function criarElemento(obj) {
    let el = obj
    let elParent = document.querySelector(".perguntas")
    el.forEach(el => {
      elParent.innerHTML += `
        <h2>${el.pergunta}</h2>
        ${gerarPerguntasRandom(el)}
      `
    })
  }

  function gerarPerguntasRandom(obj) {
    const rc = []
    rc.push(obj.respostas.rc)    
    const r1 = []
    r1.push(obj.respostas.r1)
    const r2 = []
    r2.push(obj.respostas.r2)    
    const r3 = []
    r3.push(obj.respostas.r3)

    const random = Number.parseInt(Math.random() * 4)

    const btns = [
      `<button id='rc' class='pergunta-btn'>${rc}</button>`,
      `<button class='pergunta-btn'>${r1}</button>`,
      `<button class='pergunta-btn'>${r2}</button>`,
      `<button class='pergunta-btn'>${r3}</button>`,
    ]
    
    function shuffle(o) {
      for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    }

    return shuffle(btns)
  }
}