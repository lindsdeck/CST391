import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CenterService } from '../../services/center';
import { Center } from '../../services/center.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form implements OnInit {
  private centerService = inject(CenterService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  center: Center = {
    name: '',
    description: '',
    rating: 0,
    openings: 0,
    price_per_week: 0
  };

  isEdit = false;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEdit = true;

      this.centerService.getCenterById(Number(id)).subscribe({
        next: (data) => {
          this.center = data[0]; // remember your backend returns array
        }
      });
    }
  }

  save(): void {
    if (this.isEdit && this.center.id) {
      this.centerService.updateCenter(this.center.id, this.center).subscribe(() => {
        this.router.navigate(['/centers']);
      });
    } else {
      this.centerService.createCenter(this.center).subscribe(() => {
        this.router.navigate(['/centers']);
      });
    }
  }
}