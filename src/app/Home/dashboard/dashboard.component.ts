import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'Tega - Dashboard';

  constructor() { }

  ngOnInit(): void {
  }
}
