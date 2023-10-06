import { Component, Input } from '@angular/core';
import { Video } from '../../interface/videos.interface';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'videos-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent{
   
  @Input() public videos:Video[]=[] 

  
}
