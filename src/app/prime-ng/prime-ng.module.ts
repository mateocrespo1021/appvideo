import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({

  exports: [SidebarModule,ButtonModule,InputTextModule,GalleriaModule]
})
export class PrimeNgModule {}
