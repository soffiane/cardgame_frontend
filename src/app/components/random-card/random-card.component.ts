import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/model/card';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-random-card',
  templateUrl: './random-card.component.html',
  styleUrls: ['./random-card.component.css']
})
export class RandomCardComponent implements OnInit {

  card: Card;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private location: Location) { }

  ngOnInit() {
    this.getRandomCard();
  }
  getRandomCard() {
    this.cardService.getRandomCard()
      .subscribe(card => this.card = card);
  }

  goBack(): void {
    this.location.back();
  }


}
