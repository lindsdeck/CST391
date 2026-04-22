import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';
import { MusicServiceService } from '../service/music-service.service';
import { DisplayAlbum } from '../display-album/display-album';

@Component({
  selector: 'app-list-albums',
  standalone: true,
  imports: [CommonModule, DisplayAlbum],
  templateUrl: './list-albums.html',
  styleUrl: './list-albums.css'
})
export class ListAlbumsComponent implements OnChanges {
  @Input() artist?: Artist;

  albums: Album[] = [];
  selectedAlbum: Album | null = null;
  loading = false;

  constructor(private service: MusicServiceService) {}

ngOnChanges(changes: SimpleChanges): void {
  if (changes['artist'] && this.artist) {
    console.log('artist changed:', this.artist.artist);
    this.loading = true;
    this.albums = [];
    this.selectedAlbum = null;

    this.service.getAlbumsOfArtist(this.artist.artist, (albums: Album[]) => {
      this.albums = albums;
      this.loading = false;
      console.log('albums loaded:', this.albums);
    });

    setTimeout(() => {
      if (this.loading) {
        console.error('Album request never completed.');
        this.loading = false;
      }
    }, 5000);
  }
}

  public onSelectAlbum(album: Album): void {
    this.selectedAlbum = album;
  }
}