import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Album } from '../models/albums.model';
import { Track } from '../models/tracks.model';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-create-album',
  standalone: true,
  templateUrl: './create-album.html',
  styleUrl: './create-album.css',
  imports: [FormsModule]
})
export class CreateAlbum implements OnInit {
  album: Album = {
    albumId: Math.floor(Math.random() * 1000000),
    title: '',
    artist: '',
    description: '',
    year: '',
    image: '',
    tracks: [],
  };

  tracksRaw: string = '';
  wasSubmitted: boolean = false;

  constructor(
    private service: MusicServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public onSubmit(): void {
    const tracks: Track[] = [];
    const tracksAll = this.tracksRaw.split('\n');

    for (let i = 0; i < tracksAll.length; ++i) {
      let title = '';
      let lyrics = '';
      let video = '';

      const trackInfo = tracksAll[i].trim();
      if (!trackInfo) {
        continue;
      }

      const trackParts = trackInfo.split(':');

      if (trackParts.length === 3) {
        title = trackParts[0];
        lyrics = trackParts[1];
        video = trackParts[2];
      } else if (trackParts.length === 2) {
        title = trackParts[0];
        lyrics = trackParts[1];
      } else {
        title = trackParts[0];
      }

      tracks.push({
        trackId: Math.floor(Math.random() * 1000000),
        number: tracks.length + 1,
        title,
        lyrics,
        video
      });
    }

    this.album.tracks = tracks;
    console.log(this.album);

    this.service.createAlbum(this.album, () => {
      this.wasSubmitted = true;
      this.router.navigate(['/list-artists'], {
        queryParams: { data: new Date() }
      });
    });
  }
}