import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { SettingsService } from '@core';

@Component({
  selector: 'app-user',
  template: `
    <button class="r-full" mat-button [matMenuTriggerFor]="menu">
      <img matButtonIcon class="avatar r-full" src="./assets/images/avatar.png" width="24" alt="avatar" />
      <span class="m-x-8">Usuario</span>
    </button>

    <mat-menu #menu="matMenu">
      <button mat-menu-item (click)="restore()">
        <mat-icon>restore</mat-icon>
        <span>{{ 'restore_defaults' | translate }}</span>
      </button>
      <button mat-menu-item (click)="logout()">
        <mat-icon>exit_to_app</mat-icon>
        <span>{{ 'logout' | translate }}</span>
      </button>
    </mat-menu>
  `,
  styles: [
    `
      .avatar {
        width: 24px;
        height: 24px;
      }
    `,
  ],
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule, MatMenuModule, TranslateModule],
})
export class UserComponent implements OnInit {

  constructor(
    private settings: SettingsService
  ) {}

  ngOnInit(): void {
  }

  logout() {
    alert('logout')
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
  }

  restore() {
    this.settings.reset();
    window.location.reload();
  }
}
