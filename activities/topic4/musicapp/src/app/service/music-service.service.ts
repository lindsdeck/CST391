import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {
  private host = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  public getArtists(callback: (artists: Artist[]) => void): void {
    this.http.get<Artist[]>(this.host + '/artists')
      .subscribe((artists: Artist[]) => {
        callback(artists);
      });
  }

  public getAlbums(callback: (albums: Album[]) => void): void {
    this.http.get<Album[]>(this.host + '/albums')
      .subscribe((albums: Album[]) => {
        callback(albums);
      });
  }

public getAlbumsOfArtist(artistName: string, callback: (albums: Album[]) => void): void {
  const request = this.host + '/albums/' + encodeURIComponent(artistName);
  console.log('request', request);

  this.http.get<Album[]>(request).subscribe({
    next: (albums: Album[]) => {
      console.log('have albums', albums);
      callback(albums);
    },
    error: (error) => {
      console.error('Error loading albums:', error);
    }
  });
}

  public createAlbum(album: Album, callback: () => void): void {
    this.http.post<Album>(this.host + '/albums', album)
      .subscribe(() => {
        callback();
      });
  }

  public updateAlbum(album: Album, callback: () => void): void {
    this.http.put<Album>(this.host + '/albums', album)
      .subscribe(() => {
        callback();
      });
  }

  public deleteAlbum(id: number, callback: () => void): void {
    this.http.delete(this.host + '/albums/' + id)
      .subscribe(() => {
        callback();
      });
  }
}