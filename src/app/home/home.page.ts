import { Component, ViewEncapsulation, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { SwipeCardsModule } from 'ng2-swipe-cards';
import { Http } from '@angular/http';
// import 'rxjs/Rx';
import { element } from 'protractor';
import { 
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent } from 'angular2-swing';

import 'rxjs/add/operator/map';

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
    this.swingStack.throwin.subscribe((event: DragEvent) => {
      event.target.style.background = '#ffffff';
    });

    this.cards = [{ email: ''}];
    this.addNewCards(1);
  }

  
  /**
   * Called whenever we drag an element
   * @param element 
   * @param x 
   * @param y 
   * @param r 
   */
  onItemNove(element, x, y, r) {
    var color = '';
    var abs = Math.abs(x);
    let min = Math.trunc(Math.min(16*16 - abs, 16*16));
    let hexCode = this.decimalToHex(min, 2);

    if (x < 0) {
      color = '#FF' + hexCode + hexCode;
    } else {
      color = '#' + hexCode + 'FF' + hexCode;
    }

    element.style.background = color;
    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }

  /**
   * Connected through HTML
   * @param like 
   */
  voteUp(like: boolean) {
    let removeCard = this.cards.pop();
    this.addNewCards(1);
    if (like) {
      this.recentCard = 'You liked: ' + removeCard.email;
    } else {
      this.recentCard = 'You disliked: ' + removeCard.email;
    }
  }

  /**
   * Add new cards to our array
   * @param count 
   */
  addNewCards(count: number) {
    this.http.get('https://randomuser.me/api/?results=' + count)
    .map(data => data.json().results)
    .subscribe(result => {
      for (let val of result) {
        this.cards.push(val);
      }
    })
  }

  decimalToHex(d, padding) {

  }


}
