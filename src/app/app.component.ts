import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {

  }

  cityName: string = "";
  weatherData: WeatherData | null = null;

  ngOnInit(): void {
    this.getWeatherData('Milan');
  }

  fromFtoC(f: number): number {
    return Math.round((f - 32) * (5 / 9));
  }

  onKey(event: KeyboardEvent) {
    this.cityName = (event.target as HTMLInputElement).value;
    console.log((event.target as HTMLInputElement).value)
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          console.log(response);
        }
      })
  }
}
