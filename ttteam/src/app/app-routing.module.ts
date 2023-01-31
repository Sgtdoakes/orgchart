import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { OrgchartComponent } from './org-chart/org-chart.component';
import { RootsComponent } from './roots/roots.component';

const routes: Routes = [
  {path: '', component: OrgchartComponent} ,
  { path: 'roots', component: RootsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: OrgchartComponent} ,
    { path: 'roots', component: RootsComponent }
  ]),
  BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
