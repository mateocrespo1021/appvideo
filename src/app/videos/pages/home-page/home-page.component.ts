import { Component } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { Video } from '../../interface/videos.interface';

@Component({
  selector: 'videos-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private videosService:VideosService){ 
  }

  get mensaje():string{
    return this.videosService.alert.mensaje
  }

  get alerta():boolean{
   return this.videosService.alert.visible
  }

  get videos():Video[]{
    return this.videosService.videos
  }
}
