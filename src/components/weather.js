import React from "react";

const Weather = props=> (
<div>


{props.city &&
<div>
<center className="result"><p>Current Location: {props.city} {props.country}</p>
<p>Temperature:{props.temp}</p>
<p>Pressure:{props.pressure}</p>
<p>Sunset:{props.sunset}</p></center>
</div>
}
            <center className="error">{props.error}</center>


</div>
    );

export default Weather;