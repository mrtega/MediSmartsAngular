import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import * as Feather from 'feather-icons';
import { AuthService } from './../../Auth/Service/auth.service';
import { NotifierService } from 'angular-notifier';
import { UserService } from './../../Auth/Service/user.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit, AfterViewInit{

  isOpen = false;

  @ViewChild('topbar', { static: true }) topbar: ElementRef;

  constructor(private auth: AuthService, private notifier: NotifierService, private router: Router, private user: UserService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    Feather.replace();
  }

  logout(): void {
    this.showSuccessNotification('Logging out!');
    this.auth.logout();
  }

  toggleDisplay() {
    this.isOpen = !this.isOpen;
  }

  public showSuccessNotification(message: string): void {
    this.notifier.notify('success', message);
  }

  public showErrorNotification(message: string): void {
    this.notifier.notify('error', message);
  }

}

