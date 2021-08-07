import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather = {};
  main = {};
  wind = {};
  name = ``;
  cityName = ``;
  error = null;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getWeatherForCity() {
    // this.weatherData = this.cityName;
    this.weatherService.getWeatherForCity(this.cityName).subscribe(
    res => {
      this.weather = res.weather;
      this.main = res.main;
      this.wind = res.wind;
      this.name = res.name;
      this.error = null;
    },
    err => this.error = err.error
    );
  }

}
