import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Service } from '../service.service';
import { Spotlist } from './spotlist.interface';

@Component({
  selector: 'spotlist',
  templateUrl: './spotlist.component.html',
  styleUrls: ['./spotlist.component.css'],
})
export class SpotlistComponent {
  isVisible = true;
  isBold = true;
  @Input() spotlist: string;
  @Output() spotlistChange = new EventEmitter();
  spotlists: Spotlist[];

  constructor(private Service: Service) {
    Service.getSpotlists().subscribe((spotlists) => {
      this.spotlists = spotlists;

      console.log(spotlists);
    });
  }

  sendMessage() {
    this.spotlistChange.emit(this.spotlist);
    console.log(this.spotlist);
  }
}
