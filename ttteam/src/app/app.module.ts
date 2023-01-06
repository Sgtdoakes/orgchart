import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';  
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";  
import { AppComponent } from './app.component';  
import {OrganizationChartModule} from 'primeng/organizationchart';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { OrgchartComponent } from './org-chart/org-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_INITIALIZER } from '@angular/core';
import { environment } from '../environments/environment';
import { JsonService } from './services/json.service';
// import {NodeService} from './nodeservice';

import {TreeModule} from 'primeng/tree';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';

@NgModule({  
  declarations: [  
    AppComponent,  
    OrgchartComponent
  ],  
  imports: [  
    BrowserModule,
    HttpClientModule,
    OrganizationChartModule,
    BrowserAnimationsModule,
    NgbModule,
    BrowserAnimationsModule,
    TreeModule,
    ToastModule,
    ButtonModule,
    FormsModule
  ],
  providers: [
    // NodeService,
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