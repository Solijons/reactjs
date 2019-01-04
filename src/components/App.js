import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import './App.css';


const API_KEY = "1da8aea2d83195b8d4bb05f37316f20e";

class App extends React.Component{

state = {
temp: undefined,
city: undefined,
country: undefined,
pressure: undefined,
sunset: undefined,
error: undefined



}
    gettingWeather  = async (e) => {
      e.preventDefault(); 
    var city = e.target.elements.city.value;
    
    if(city) {

      const api_url = await 
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const data = await api_url.json();
      
      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunsetDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();




    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      pressure: data.main.pressure,
      sunset: sunsetDate,
      error: undefined



    });

  } else {
    this.setState({
  temp: undefined,
  city: undefined,
  country: undefined,
  pressure: undefined,
  sunset: undefined,
  error: "Please Enter Your City"
  });
  }
  };



render () {
  return (
<div>
  <Info/>
  <Form weatherMethod = {this.gettingWeather} />
  <Weather 
  temp = {this.state.temp}
  city = {this.state.city}
  country = {this.state.country}
  pressure = {this.state.pressure}
  sunset = {this.state.sunset}
  error = {this.state.error}


  
  />




</div>


  );
}
}

export default App;