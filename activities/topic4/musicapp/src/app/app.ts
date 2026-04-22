import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'My Music Collection';
  version = 1.0;

  constructor(private router: Router) {}

  displayVersion() {
    alert('Version: ' + this.version);
  }

  displayArtistList() {
    this.router.navigate(['list-artists']);
  }
}