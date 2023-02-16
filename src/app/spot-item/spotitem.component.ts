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
  ngOnChanges() {
    if (
      (this.spot.availableSpotNumber.value / this.spot.totalSpotNumber.value) *
        100 <
      25
    ) {
      console.log(
        ' the spot ',
        this.spot.name.value,
        ' has Less than 25% space left'
      );
    }
  }
}
