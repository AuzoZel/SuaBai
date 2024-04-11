const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ec6482b63msh45cde64ad2c1b87p12f669jsnea05f2139f39',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

async function getData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        var data = JSON.parse(result)
        var nhietDo = data.current.temp_c;  
        document.getElementById("nhietdo").innerHTML=nhietDo
        var Vitri = data.location.country;
        document.getElementById("vitri").innerHTML=Vitri
        var Cloud = data.current.cloud;
        document.getElementById("cloud").innerHTML=Cloud
    } catch (error) {
        console.error(error);
    }
}
getData();