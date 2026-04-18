import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShopComponent } from './shop/shop';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShopComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'simpleapp';
}