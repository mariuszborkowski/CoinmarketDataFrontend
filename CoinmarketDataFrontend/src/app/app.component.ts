import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
  public cryptocurrencies: Currency[];

  constructor(http: HttpClient) {
    http.get<Currency[]>('http://localhost:24432/coinmarketdata').subscribe(result => {
      this.cryptocurrencies = result;
    }, error => console.error(error));
  }
  
  public visibleIndex = -1;
  public showSubItem(ind) {
    if (this.visibleIndex === ind) {
      this.visibleIndex = -1;
    } else {
      this.visibleIndex = ind;
    }
  }
  
}

interface Currency {
  id: number;
  cryptocurrencyName: string;
  cryptocurrencySymbol: string;
  cryptocurrencyRank: string;
  circulatingSupply: string;
  totalSupply: string;
  maxSupply: string;
  price: string;
  volume24h: string;
  marketCap: string;
  percentChange1h: string;
  percentChange24h: string;
  percentChange7d: string;
  lastUpdateTime: string;
}