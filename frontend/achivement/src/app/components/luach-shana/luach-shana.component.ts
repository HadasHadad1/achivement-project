import { Component } from '@angular/core';

@Component({
  selector: 'app-luach-shana',
  templateUrl: './luach-shana.component.html',
  styleUrls: ['./luach-shana.component.css']
})
export class LuachShanaComponent {
  startDate: string = '';
  endDate: string = '';
  frequency: string = 'daily';
  interval: number = 1;
}