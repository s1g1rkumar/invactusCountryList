import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  darkMode = false;
  modeToggle() {
    this.darkMode = !this.darkMode;
    document.documentElement.setAttribute("data-theme", this.darkMode ? "dark" : "light");
  }

}
