import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Soda } from './model/soda.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SodaserviceService {

  constructor(private http: HttpClient) {}


  private updateSodaPurchaseUrl='http://localhost:8080/soda/updateSodaPurchaseHistory';
  private sodaCountUrl='http://localhost:8080/soda/getSodaCount';
  

  public selectAndPurchaseSoda(soda) {
    console.log('enetered soda service:' + soda.name);
    this.http.post<String>(this.updateSodaPurchaseUrl, soda).subscribe((res) => 
    console.log(res), 
    error => console.log(error));
  }

 


}
