import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'nav[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService) {}
  ngOnInit(): void {
  }
  logout(): void {
    this.auth.logout();
  }
}
