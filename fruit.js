function changeColors(){
    const colors = ['#40ff00', '#00ffff', '#ff0080'];
    console.log("Hello World")
    const random = Math.floor(Math.random() * colors.length);
    setTimeout(function(){ 
        x = document.getElementById('fruit').style.color = colors[random];
        console.log(x)
        changeColors()
    }, 1000);
    
}