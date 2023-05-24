import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScheduleViewerComponent } from './main-schedule-viewer/main-schedule-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: MainScheduleViewerComponent,
 },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
       useHash: false,
       enableTracing: false,
       scrollPositionRestoration: 'top',
    }),
 ],
 exports: [RouterModule],

})
export class AppRoutingModule { }
