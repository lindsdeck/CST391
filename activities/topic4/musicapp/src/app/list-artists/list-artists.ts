import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/artists.model';
import { ListAlbums } from '../list-albums/list-albums';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.html',
  styleUrl: './list-artists.css',
  imports: [NgFor, NgIf, ListAlbums]
})
export class ListArtists implements OnInit {
  selectedArtist: Artist | null = null;
  artists: Artist[] = [];

  constructor(private route: ActivatedRoute, private service: MusicServiceService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("Getting data....");
      this.artists = this.service.getArtists();
      this.selectedArtist = null;
    });
  }

  onSelectArtist(artist: Artist) {
    this.selectedArtist = artist;
  }
}