function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var sdr = document.getElementById('saudar')
    
    var data =new Date()    
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML =`Agora são ${hora}:${minutos}:${segundos} horas. `
    setInterval('carregar()',1000)

    if(hora >= 0 && hora< 12){
        
        sdr.innerHTML = 'Bom dia!'
        img.src = 'imagens/manha.png'
        document.body.style.background = '#DCAD79'
    }
    else if(hora >= 12 && hora <19){
        sdr.innerHTML = 'Bom Tarde!'
        img.src = 'imagens/tarde.png'  
        document.body.style.background ='#767660'      
    }
    else{
        sdr.innerHTML = 'Boa noite!'
        img.src = 'imagens/noite.png'   
        document.body.style.background = '#895B62'        
    }

    

          
    

    
    
}

