import React from 'react';
import DateFormate from '../DateFormate'
import WeatherIcons from './Weathericons';
import TempConverter from '../TempConverter';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style.css";
const WeatherInfo = (props) => {
  return (
    <div>
      <div className="info-container">
        <ul className="city-name">
          <li>
            <h1>{props.data.city}</h1>
          </li>
          <li>
            <DateFormate date={props.data.date} />
          </li>
        </ul>
        <ul className="info-weather">
          <li>
            <strong>{props.data.description}</strong>
          </li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>wind: {props.data.wind}Km/h</li>
        </ul>
      </div>
      <div className="infoTemp">
        <div>
          <WeatherIcons code={props.data.icon} size={50} />
        </div>
        <div className="unit-temperature">
          <TempConverter celsius={props.data.temperarute} />
        </div>
      </div>
    </div>
  )
}

export default WeatherInfo
