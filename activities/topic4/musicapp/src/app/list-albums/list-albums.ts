import { Component, OnInit, Input } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';
import { NgFor, NgIf } from '@angular/common';
import { DisplayAlbum } from '../display-album/display-album';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.html',
  styleUrl: './list-albums.css',
  imports: [NgFor, NgIf, DisplayAlbum]
})
export class ListAlbums implements OnInit {
  @Input() artist: Artist | null = null;
  albums: Album[] = [];
  selectedAlbum: Album | null = null;

  constructor(private service: MusicServiceService) {}

  ngOnInit() {
    this.albums = this.service.getAlbumsOfArtist(this.artist!.artist);
  }

  public onSelectAlbum(album: Album) {
    this.selectedAlbum = album;
  }
}