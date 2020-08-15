import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pba-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() headerText: string;
  @Input() messageText: string;

  constructor() { }
}
