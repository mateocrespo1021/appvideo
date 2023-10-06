import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
    
  ],
  exports:[
    SidebarComponent
  ]
})
export class SharedModule { }
