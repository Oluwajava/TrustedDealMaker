import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() id?: number;
  @Input() title?: String;
  @Input() icon?: String;
  @Input() subtitle1?: String;
  @Input() subtitle2?: String;


  constructor() { }

  ngOnInit() {
  }

}
