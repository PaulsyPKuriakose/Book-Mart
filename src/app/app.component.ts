import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Book Mart';
  constructor(private router: Router) {}
  navigate(url: string) {
    console.log(url);
    this.router.navigateByUrl(url);
  }
}
