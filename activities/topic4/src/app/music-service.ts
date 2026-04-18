import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  constructor(private http: HttpClient) {}

  private host = 'http://localhost:5000';

  public getArtists(callback: (artists: any[]) => void): void {
    this.http.get<any[]>(this.host + '/artists')
      .subscribe((artists) => {
        callback(artists);
      });
  }

  public getAlbums(callback: (albums: any[]) => void): void {
    this.http.get<any[]>(this.host + '/albums')
      .subscribe((albums) => {
        callback(albums);
      });
  }
}