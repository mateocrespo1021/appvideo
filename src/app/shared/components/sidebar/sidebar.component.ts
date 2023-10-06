import { Component } from '@angular/core';
import { VideosService } from 'src/app/videos/services/videos.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sidebarVisible: boolean = true;

  constructor(private videosService:VideosService){}

  get tags():string[]{
    return this.videosService.tags
  }

  searchTag(tag:string):void{
      this.videosService.searchVideos(tag)
  }
}
