import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';  
import { HttpClientModule } from "@angular/common/http";  
import { AppComponent } from './app.component';  
import {OrganizationChartModule} from 'primeng/organizationchart';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { OrgchartComponent } from './org-chart/org-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_INITIALIZER } from '@angular/core';
import { environment } from '../environments/environment';
import { JsonService } from './services/json.service';

@NgModule({  
  declarations: [  
    AppComponent,  
    OrgchartComponent
  ],  
  imports: [  
    BrowserModule,HttpClientModule,OrganizationChartModule,BrowserAnimationsModule, NgbModule  
  ],  
  providers: [
    JsonService,
    {
      provide : APP_INITIALIZER,
      useFactory : ConfigLoader,
      deps : [JsonService],
      multi : true
    }
  ],  
  bootstrap: [AppComponent]
})  
export class AppModule { }  
export function ConfigLoader(configService: JsonService) {  
  return () => configService.load(environment.ttteamFile); 
}