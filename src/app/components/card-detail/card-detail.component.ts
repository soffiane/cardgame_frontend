import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/model/card';
import { CardService } from 'src/app/services/card.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  // on importe le component card depuis CardComponent.html
  @Input() card: Card;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCard();
  }

  getCard(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cardService.getCard(id)
      .subscribe(card => this.card = card);
  }

  goBack(): void {
    this.location.back();
  }

}
