import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from '../info/info';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.html',
  styleUrl: './shop.css',
  imports: [ReactiveFormsModule, InfoComponent, NgIf]
})
export class ShopComponent {
  question = "What's your name?";
  answer = "unknown";

  appForm = new FormGroup({
    answer: new FormControl(''),
  });

  onSubmit(data: Partial<{ answer: string | null }>) {
    this.answer = data.answer!;
    console.log("Your name is " + this.answer);
  }
}