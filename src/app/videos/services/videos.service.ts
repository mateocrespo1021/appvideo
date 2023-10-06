import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponsive, Video } from '../interface/videos.interface';

@Injectable({ providedIn: 'root' })


export class VideosService {
  private apiKey = '9tn3xwNNWVwvTnsy102j7FqNPheQmywL0rtosboDSxM6cjkBXhyae7ey';
  private serviceUrl = 'https://api.pexels.com/videos';
  public videos: Video[] = [];
  public tags: string[] = [];
  public alert = {
    visible:false,
    mensaje:''
  };
  
  

  constructor(private http: HttpClient) {
    this.loadLocalStorage()
    this.searchVideos(this.tags[0])
  }

  verAlerta(mensaje:string){
      this.alert.mensaje=mensaje
      this.alert.visible=true
      setTimeout(() => {
        this.alert.visible=false
      }, 3000);
  
  }

  private loadLocalStorage(){
    if (localStorage.getItem('tags') == null) return
    this.tags=JSON.parse(localStorage.getItem('tags')!)
  }

  private saveLocalStorage(){
    localStorage.setItem('tags',JSON.stringify(this.tags))
  }

  private addTag(tag: string) {
    if (this.tags.includes(tag)) return;
    tag = tag.toLowerCase();
    if (this.tags.length >= 5) {
      this.tags.pop();
    }
    this.tags.unshift(tag);
    this.saveLocalStorage()
  }

  searchVideos(tag: string): void {
    // Configura el encabezado con tu clave de API
    const headers = new HttpHeaders({
      Authorization: this.apiKey,
    });

    const params = new HttpParams().set('query', tag).set('per_page', '10'); // Ten en cuenta que 'per_page' debe ser una cadena

    // Observable
    this.http
      .get<SearchResponsive>(`${this.serviceUrl}/search`, { headers, params })
      .subscribe((resp) => {
        if (resp.videos.length > 0) {
          this.videos = resp.videos;
          this.addTag(tag);
          return;
        }
        //No hay resultados
        this.verAlerta('No hay resultados')   
      });
  }
}
