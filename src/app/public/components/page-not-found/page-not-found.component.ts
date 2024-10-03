import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    TranslateModule
  ],
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  path: string;

  constructor(private router: Router) {
    this.path = this.router.url;
  }
}
