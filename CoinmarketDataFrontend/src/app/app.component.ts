import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
  public currencies: Currency[];

  constructor(http: HttpClient) {
    http.get<Currency[]>('http://localhost/coinmarketdata').subscribe(result => {
      this.currencies = result;
    }, error => console.error(error));
  }
}

interface Currency {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}