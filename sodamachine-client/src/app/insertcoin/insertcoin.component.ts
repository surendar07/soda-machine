import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { CoinserviceService } from '../coinservice.service';
import { Coin } from '../model/coin.model';

@Component({
  selector: 'app-insertcoin',
  templateUrl: './insertcoin.component.html',
  styleUrls: ['./insertcoin.component.css']
})
export class InsertcoinComponent implements OnInit {
  coin: Coin = new Coin();
  constructor(private coinService: CoinserviceService) { }

  ngOnInit() {
  }

  selectInsertChangeHandler (event: any) {
    //update the ui
    this.coin.value = event.target.value;
  }

  selectGetCoinChangeHandler (event: any) {
    //update the ui
    this.coin.value = event.target.value;
  }

  insertCoin(): void {
    //this.coin.value = 25;
    console.log("coin val"+this.coin.value);
    this.coinService.insertCoin(this.coin);
  }

  getCoin(): void {
    this.coin.value = 25;
    this.coinService.getCoin(this.coin);
  }
}
