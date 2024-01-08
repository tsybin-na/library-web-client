import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
