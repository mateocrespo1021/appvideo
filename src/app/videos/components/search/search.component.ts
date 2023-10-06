import { Component } from '@angular/core';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'videos-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
 public value:string=''


 constructor(private videosService:VideosService){
 }

 searchVideos(tag:string):void{
  if (tag==='') {
   this.videosService.verAlerta('Ingrese una busqueda')
   return
  } 
  this.videosService.searchVideos(tag)
  this.value=''
 }
}
