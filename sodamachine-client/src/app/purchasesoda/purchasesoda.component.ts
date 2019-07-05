import { Component, OnInit } from '@angular/core';
import { SodaserviceService } from '../sodaservice.service';
import { Soda } from '../model/soda.model';

@Component({
  selector: 'app-purchasesoda',
  templateUrl: './purchasesoda.component.html',
  styleUrls: ['./purchasesoda.component.css']
})
export class PurchasesodaComponent implements OnInit {

  soda: Soda = new Soda();
  constructor(private sodaService: SodaserviceService) { }

  ngOnInit() {
  }

  selectSodaChangeHandler (event: any) {
    //update the ui
    this.soda.name = event.target.value;
  }

  purchaseSoda(): void {
    this.sodaService.selectAndPurchaseSoda(this.soda);
  }
}
