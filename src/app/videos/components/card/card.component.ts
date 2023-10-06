import { Component, Input } from '@angular/core';
import { Video } from '../../interface/videos.interface';

@Component({
  selector: 'videos-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  @Input() video?:Video; 
}
