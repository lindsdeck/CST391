import { Component, Input } from '@angular/core';
import { Album } from '../models/albums.model';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-display-album',
  templateUrl: './display-album.html',
  styleUrl: './display-album.css',
  imports: [NgFor, RouterLink]
})
export class DisplayAlbum {
  @Input() album: Album | null = null;
}