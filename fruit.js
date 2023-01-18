function changeColors(){
    const colors = ['#40ff00', '#00ffff', '#ff0080'];
    console.log("Hello World")
    const random = Math.floor(Math.random() * colors.length);
    setTimeout(function(){ 
        x = document.getElementById('fruit').style.color = colors[random];
        // search ID
        document.getElementById('fruit').style.color = colors[random];
        document.getElementById('search').style.borderColor = colors[random];
        document.getElementById('searchButton').style.backgroundColor = colors[random];
        // round left buttons
        document.getElementById('rightRoundButtonID').style.backgroundColor = colors[random];
        document.getElementById('rightRoundButtonID').addEventListener('mouseover', function(){
            document.getElementById('rightRoundButtonID').style.backgroundColor = colors[1];
            console.log("mouse over")
        })
        document.getElementById('rightRoundButtonID2').style.backgroundColor = colors[random];
        document.getElementById('welcomeText').style.color = colors[random];
        document.getElementById('fruitTitleID').style.backgroundColor = colors[random];
        document.getElementById('fruitTitleID3').style.backgroundColor = colors[random];
        document.getElementById('fruitTitleID4').style.backgroundColor = colors[random];
        document.querySelector('body').style.backgroundImage = `linear-gradient(white, white, ${colors[random]})`; 
        // add icons
        document.getElementById('more').style.color = colors[random];
        document.getElementById('more3').style.color = colors[random];
        document.getElementById('more4').style.color = colors[random];
        console.log(x)
        changeColors()
    }, 3000);
    
}