import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  status: boolean = false;
  loginmenu: string = "Login";

  constructor(private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      let username = localStorage.getItem("username");
      if (username) {
        this.status = true;
        this.loginmenu = `${username}, Logout`;
      }
    }
  }

  loginhandler() {
    if (this.status) {
      localStorage.removeItem("username");
      this.status = false;
      this.loginmenu = "Login";
      this.cd.detectChanges(); // ✅ Ensures UI updates immediately
    } else {
      this.router.navigate(['/login']);
    }
  }
}
