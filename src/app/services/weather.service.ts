import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    let url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${cityName}&format=json&u=f`;
    let XRapidAPIHost = "yahoo-weather5.p.rapidapi.com";
    let XRapidAPIKey = "0a8a6bc49bmsh3b014129d69c7bfp1b9a75jsn19952bea9867";

    return this.http.get<WeatherData>(url, {
      headers: new HttpHeaders()
        .set("X-RapidAPI-Host", XRapidAPIHost)
        .set("X-RapidAPI-Key", XRapidAPIKey)
    });
  }
}
