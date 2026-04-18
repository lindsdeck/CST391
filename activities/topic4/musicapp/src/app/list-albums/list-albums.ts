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
  @Input() artist!: Artist;

  albums: Album[] = [];
  selectedAlbum: Album | null = null;

  constructor(private service: MusicServiceService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['artist'] && this.artist) {
      this.service.getAlbumsOfArtist(this.artist.artist, (albums: Album[]) => {
        this.albums = albums;
        this.selectedAlbum = null;
        console.log('albums', this.albums);
      });
    }
  }

  public onSelectAlbum(album: Album): void {
    this.selectedAlbum = album;
  }
}