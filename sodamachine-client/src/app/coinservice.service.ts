import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coin } from './model/coin.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CoinserviceService {

  constructor(private http: HttpClient) {}
  private insertcoinUrl = 'http://localhost:8080/coin/insertCoin';
  private coinInventoryUrl = 'http://localhost:8080/coin/coinInventory';
  private deleteCoinUrl='http://localhost:8080/coin/deleteCoin';

  public getCoins() {
    this.http.get(this.coinInventoryUrl).subscribe((res) => 
    console.log(res), 
    error => console.log(error));

  
  }

  public insertCoin(coin) {
    console.log('enetered insert coin method is service:' + coin.value);
    this.http.post<String>(this.insertcoinUrl, coin).subscribe((res) => 
      console.log(res), 
      error => console.log(error));
      
  }

  public getCoin(coin) {
    console.log('enetered get coin method in service:' + coin.value);
    this.http.post<String>(this.deleteCoinUrl, coin).subscribe((res) => 
    console.log(res), 
    error => console.log(error));
  }



}
