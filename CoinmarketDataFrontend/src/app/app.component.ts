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
	  this.cryptocurrencies = this.cryptocurrencies.sort(function(a, b){
		if(a.cryptocurrencyId < b.cryptocurrencyId) return -1;
		if(a.cryptocurrencyId > b.cryptocurrencyId) return 1;
		return 0;
	});
	  
    }, error => console.error(error));
  }
   
  public visibleIndex = new Array(100) ;
  public showSubItem(index) {
    if (this.visibleIndex[index] === index) {
      this.visibleIndex[index] = -1;
    } else {
      this.visibleIndex[index] = index;
    }
  }
  
}

interface Currency {
  id: number;
  cryptocurrencyId: number;
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