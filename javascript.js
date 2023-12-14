function abrirMenu() {
    document.querySelector('.menu').className = 'menu2'
    document.getElementById('icone-menu').style.display = 'none'
    document.getElementById('x').style.display = 'block'
}

function fecharMenu() {
    document.getElementById('x').style.display = 'none'
    document.getElementById('icone-menu').style.display = 'block'
    document.querySelector('.menu2').className = 'menu'
}