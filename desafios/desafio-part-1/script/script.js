function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var body = document.querySelector('body')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = '../desafio-part-1/img/sla.JPG' 
        body.style.backgroundColor = 'Blue'
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = './img/pexels-marek-piwnicki-3907296-19466248.jpg'
        body.style.backgroundColor = 'red'
    }else {
        //BOA NOITE
        img.src = './img/pexels-edotommo99-32459069.jpg'
        body.style.backgroundColor = 'black'
    }

}

