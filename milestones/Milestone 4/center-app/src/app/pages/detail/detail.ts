import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CenterService } from '../../services/center';
import { Center } from '../../services/center.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class Detail implements OnInit {
  private route = inject(ActivatedRoute);
  private centerService = inject(CenterService);

  center?: Center;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.centerService.getCenterById(Number(id)).subscribe({
        next: (data) => {
          this.center = data[0];
        }
      });
    }
  }
}