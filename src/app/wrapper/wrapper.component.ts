import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent {
  userRole = localStorage.getItem('role');
  constructor(private readonly router: Router) {}
  navigateToPage(path: string) {
    this.router.navigate([`books-adda/${path}`]);
    // this.router.navigate([`books-adda/[path]`]);
  }
}
