function abrirMenu() {
    document.getElementById('icone-menu').style.display = 'none'

    document.getElementById('x').style.display = 'block'

    document.getElementById('menu-vertical').style.display = 'flex'
}

function fecharMenu() {
    document.getElementById('icone-menu').style.display = 'block'

    document.getElementById('x').style.display = 'none'

    document.getElementById('menu-vertical').style.display = 'none'
}