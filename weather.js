
let loc = document.getElementById('search-location');
let search;
function print() {
    search = loc.value;
    loc.value = ""
    console.log(search);

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + search + '&appid=6cae19e531519a5debef539c4b7fa769')
        .then((res) => res.json()
            .then((data) => {
                if (!res.ok) {
                    document.getElementById('error-message').style.display = 'block';
                    document.getElementById('show-all').style.display = 'none';
                    document.getElementById('tell').style.display = 'none';
                }
                else {
                    document.getElementById('error-message').style.display = 'none';
                    document.getElementById('show-all').style.display = 'block';
                    document.getElementById('tell').style.display = 'none';

                    
                    var iconcode = data.weather[0].icon;
                    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                    document.getElementById('imgsrc').src=iconurl;
                    document.getElementById('temperature').innerHTML = `온도: ${data.main.temp}`;
                    document.getElementById('location').innerHTML = `지역: ${search}`;
                    document.getElementById('humidity').innerHTML = `습도: ${data.main.humidity}`;
                    document.getElementById('wind').innerHTML = `풍속: ${data.wind.speed}`;
                    console.log(data);
                }
            }));

};

loc.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        print();
    }
});




