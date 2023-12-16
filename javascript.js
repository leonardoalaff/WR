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

function dark() {
    document.getElementById('mode').style.display = 'none'
    document.getElementById('dark-mode').style.display = 'none'

    document.getElementById('dark-mode2').style.display = 'flex'
    document.getElementById('mode2').style.display = 'block'

    document.getElementById('cabecalho').className = 'cabecalho2'
    document.getElementById('banner').className = 'banner2'
    document.getElementById('foto').style.display = 'none'
    document.getElementById('foto2').style.display = 'flex'
    document.getElementById('especialidades').className = 'especialidades2'
    document.getElementById('sessao1').style.backgroundColor = '#230bac'
    document.getElementById('lorem').style.color = 'white'
    document.getElementById('menu').style.backgroundColor = '#1C4194'
    document.getElementById('btn').style.backgroundColor = '#1C4194'
    document.getElementById('sessao2').style.backgroundColor = 'white'
}


function clean() {
    document.getElementById('dark-mode2').style.display = 'none'
    document.getElementById('mode2').style.display = 'none'

    document.getElementById('dark-mode').style.display = 'flex'
    document.getElementById('mode').style.display = 'block'

    document.getElementById('cabecalho').className = 'cabecalho'
    document.getElementById('banner').className = 'banner'
    document.getElementById('foto2').style.display = 'none'
    document.getElementById('foto').style.display = 'flex'
    document.getElementById('especialidades').className = 'especialidades'
    document.getElementById('sessao1').style.backgroundColor = 'white'
    document.getElementById('lorem').style.color = 'black'
    document.getElementById('menu').style.backgroundColor = '#3aafa9'
    document.getElementById('btn').style.backgroundColor = '#3aafa9'
    document.getElementById('sessao2').style.backgroundColor = '#3aafa9'
    
}