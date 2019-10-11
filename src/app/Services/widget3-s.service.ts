import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class Widget3SService {
  apiKey = 'dcd90056ca617412d66eb2db624e03bf';
  url;

  constructor(public http: HttpClient) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getWeather(city) {
    return this.http.get(this.url + city + '&cnt=5' + '&APPID=' + this.apiKey );
  }
}
