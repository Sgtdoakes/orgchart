import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';  
import { HttpClientModule } from "@angular/common/http";  
import { AppComponent } from './app.component';  
import {OrganizationChartModule} from 'primeng/organizationchart';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { OrgchartComponent } from './org-chart/org-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
  
@NgModule({  
  declarations: [  
    AppComponent,  
    OrgchartComponent
  ],  
  imports: [  
    BrowserModule,HttpClientModule,OrganizationChartModule,BrowserAnimationsModule, NgbModule  
  ],  
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }  