import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  cards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.getCards();
  }
  getCards() {
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards.slice(1, 5));
  }

}
