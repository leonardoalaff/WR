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
    document.getElementById('sessao1').style.backgroundColor = '#ceab97'
    document.getElementById('lorem').style.color = 'black'
    document.getElementById('menu').style.backgroundColor = '#ceab97'
    document.getElementById('lista').className = 'lista2'

    document.getElementById('btn').style.backgroundColor = 'black'
    document.getElementById('sessao2').style.backgroundColor = 'black'

    document.getElementById('icone-menu').style.color = 'black'

    document.getElementById('x').style.color = 'black'

    document.getElementById('logo').style.filter = 'brightness(0%)'
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

    document.getElementById('icone-menu').style.color = 'white'

    document.getElementById('x').style.color = 'white'

    document.getElementById('logo').style.filter = 'none'
    document.getElementById('lista').className = 'lista'
    
}

function desfoque() {
    document.getElementById('cabeca').style.filter = 'blur(15px)'
    document.getElementById('auri-titulo').style.filter = 'blur(15px)'

    document.getElementById('sessao3').style.backgroundColor = '#333333' 

    document.getElementById('auri-texto').style.filter = 'blur(15px)'

    document.getElementById('ler').style.filter = 'blur(15px)'
    document.getElementById('nao-ler').style.filter = 'blur(15px)'
}

function foco() {
    document.getElementById('cabeca').style.filter = 'none'
    document.getElementById('auri-titulo').style.filter = 'none'

    document.getElementById('sessao3').style.backgroundColor = 'black' 

    document.getElementById('auri-texto').style.filter = 'none'

    document.getElementById('ler').style.filter = 'none'
    document.getElementById('nao-ler').style.filter = 'none'
}

function ler() {
    document.getElementById('auri-texto').style.backgroundColor = 'black'
    document.getElementById('ler').style.display = 'none'
    document.getElementById('nao-ler').style.display = 'block'
}

function nler() {
    document.getElementById('auri-texto').style.background = 'none'
    document.getElementById('ler').style.display = 'block'
    document.getElementById('nao-ler').style.display = 'none'
}