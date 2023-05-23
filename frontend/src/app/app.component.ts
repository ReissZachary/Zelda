import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'frontend';

  
  appTitle = 'SodaMix Time Manager';


  navItems: MenuItem[] = [
    {
       label: 'Scheduler',
       items: [
          {
             label: 'Schedule Time',
             routerLink: '/scheduler',
          },
          {
             label: 'Shift request',
             routerLink: '/shiftRequest',
          },
          {
             label: 'Manager',
             routerLink: '/managerTools',
          },
       ],
    },
 ];
;

   constructor(
    private _router: Router,
  ) { }

   ngOnInit(): void {   }

   navigateTo(url: string): void {
    this._router.navigate([url]);
 }
}
