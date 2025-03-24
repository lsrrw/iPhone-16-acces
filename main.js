let = trilho = document.getElementById('trilho')
let body = document.querySelector('body')
trilho.AddEventListener('click', ()=>{
trilho.classList.toggle('dark')
body.classList.toggle('dark')
})