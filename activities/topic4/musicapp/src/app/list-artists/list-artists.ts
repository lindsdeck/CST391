import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Artist } from '../models/artists.model';
import { MusicServiceService } from '../service/music-service.service';
import { ListAlbumsComponent } from '../list-albums/list-albums';

@Component({
  selector: 'app-list-artists',
  standalone: true,
  imports: [CommonModule, ListAlbumsComponent],
  templateUrl: './list-artists.html',
  styleUrl: './list-artists.css'
})
export class ListArtistsComponent implements OnInit {
  selectedArtist: Artist | null = null;
  artists: Artist[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: MusicServiceService
  ) {}

  ngOnInit(): void {
  this.service.getArtists((artists: Artist[]) => {
    this.artists = artists;
  });
}

  onSelectArtist(artist: Artist): void {
    this.selectedArtist = artist;
  }
}
