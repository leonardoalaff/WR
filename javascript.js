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