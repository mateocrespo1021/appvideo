import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';


@NgModule({
  declarations: [
    SearchComponent,
    HomePageComponent,
    CardComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    PrimeNgModule
  ],
  exports:[
    SearchComponent,
    HomePageComponent
  ]
})
export class VideosModule { }
