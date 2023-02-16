import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Spotlist } from '../spotlist/spotlist.interface';

@Component({
  selector: 'spotitem',
  templateUrl: './spotitem.component.html',
  styleUrls: ['./spotitem.component.css'],
})
export class SpotitemComponent {
  @Input() spot: Spotlist;
  @Output() like = new EventEmitter<String>();
}
