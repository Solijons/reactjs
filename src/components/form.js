import React from "react";

const Form = props => (
    <center>
    <form onSubmit={props.weatherMethod}>
    <input className="searchbox" type="text" name="city" placeholder="Enter Your City"/>
    <button className="button w-button">Search</button>
</form>
</center>
);

export default Form;