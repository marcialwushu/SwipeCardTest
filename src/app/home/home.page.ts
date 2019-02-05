import { Component, ViewEncapsulation, ViewChild, TemplateRef, EventEmitter } from '@angular/core';
import { SwipeCardsModule } from 'ng2-swipe-cards';

@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'home.page.html',
  // styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('cardLog') cardLogContainer: any;
  @ViewChild('tinderCardLog') tinderCardLogContainer: any;

}
