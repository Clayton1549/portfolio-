click  = document.getElementById('imgSanduich')
navRes = document.getElementById('navRes')
imgBorder = document.getElementById('navResponsive')
clickF = document.getElementById('resInit')
diVsCROL = document.getElementById("stAnDiv")

const anoAtual  = function(){
 const diaHoje = new Date()
 const m = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro' ]
  document.getElementById("dh1").innerHTML =   ' ' +  m[diaHoje.getMonth()] +   ' / ' + diaHoje.getFullYear() 
    
   }
   anoAtual()

  
  

  const navResponsive = function() {
   navRes.style.display = 'block'
   click.style.display = 'none'
   imgBorder.style.display = 'none'
}

const navResHiden = function(){
  navRes.style.display = 'none'
  click.style.display = 'block'
  imgBorder.style.display = 'block'
}

const emcons = function(){
  clickF.style.display = 'none'
  imgBorder.style.display = 'none'
   
}

//esconder icone de topo
const botao = document.querySelector("#voltar_topo");
window.addEventListener("scroll", () => {
  if(window.scrollY > 200) {
    botao.classList.add("mostrar");
  }else {
    botao.classList.remove("mostrar");
  }
});
