import { Component, ViewEncapsulation, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { SwipeCardsModule } from 'ng2-swipe-cards';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { element } from 'protractor';
import { 
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent } from 'angular2-swing';


@Component({
  selector: 'app-home',
  // encapsulation: ViewEncapsulation.None,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChild('mycard1') swingCard: SwingCardComponent;

  cards: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';

  constructor(private http: Http){
    this.stackConfig = {
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.abs(offsetX)/ (element.offsetWidth/2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemNove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };
  }

  ngAfterViewInit(){

  }

  onItemNove(element, x, y, r) {

  }

  voteUp(like: boolean) {

  }

  addNewCards(count: number) {

  }

  decimalToHex(d, padding) {
    
  }


}
