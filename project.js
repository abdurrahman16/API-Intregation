var inputCity = document.getElementById('inputValue');
var btn = document.getElementById('button');
var cityStatus = document.getElementById('showCity');
var temStatus = document.getElementById('temparature');
var descStatus = document.getElementById('description');



btn.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputCity.value+'&appid=3c51fd746542437cde529cdf462acdf7')
.then (res => res.json())
.then (data =>{
    var nameValue= data['name'];
    var tempValue = data ['main']['temp'];
    var descValue = data['weather'][0]['description'];

    descStatus.innerHTML = descValue;
    temStatus.innerHTML = tempValue;
    cityStatus.innerHTML = inputCity.value;
    console.log(data);
} )
});