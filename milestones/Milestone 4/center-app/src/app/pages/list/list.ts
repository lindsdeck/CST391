import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CenterService } from '../../services/center';
import { Center } from '../../services/center.model';

@Component({
  selector: 'app-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List implements OnInit {
  private centerService = inject(CenterService);

  centers: Center[] = [];
  errorMessage = '';

  ngOnInit(): void {
    this.loadCenters();
  }

  loadCenters(): void {
    this.centerService.getCenters().subscribe({
      next: (data) => {
        console.log('API data:', data);
        this.centers = data;
      },
      error: (error) => {
        console.error('Error loading centers:', error);
        this.errorMessage = 'Could not load centers. Make sure the backend is running.';
      }
    });
  }

  deleteCenter(id?: number): void {
    if (!id) return;

    if (confirm('Are you sure you want to delete this center?')) {
      this.centerService.deleteCenter(id).subscribe({
        next: () => this.loadCenters(),
        error: (error) => {
          console.error('Error deleting center:', error);
          this.errorMessage = 'Could not delete center.';
        }
      });
    }
  }
}