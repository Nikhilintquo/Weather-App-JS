function myFunction() {
  let cname = document.getElementById("cityName").value;
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  //   var cityName = document.getElementById("cityName").value;
  //   console.log(cityName);

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cname}&appid=620bc46edc2154b6fbe31ce57f110cbc`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      // if(result.length > 0){
      if (result.weather[0].main == "Clouds") {
        document.body.style.background = "url('clouds.jpg')";
      }
      if(result.weather[0].main == "Rain"){
        document.body.style.background = "url('rain.jpg')";
      }
      if(result.weather[0].main == "Clear"){
        document.body.style.background = "url('clear.jpg')";
      }
      if (result.weather[0].main == "Haze") {
        document.body.style.background = "url('haze.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
      }
      console.log(result);
      let apiResult = `<div class="row">
                <div class="col-md-6">
                    <h5>Longitude : ${result.coord.lon} </h5>
                </div>
                <div class="col-md-6">
                    <h5>Latitude : ${result.coord.lat} </h5>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-md-6">
                    <h5>Main : ${result.weather[0].main}</h5>
                </div>
                <div class="col-md-6">
                    <h5>Description : ${result.weather[0].description}</h5>
                </div>
            </div>`;
      document.querySelector("#finalResult").innerHTML = apiResult;
      // }
    })
    .catch((error) => console.log("error", error));
}
