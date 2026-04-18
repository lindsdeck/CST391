import { Injectable } from '@angular/core';
//pulling in the mock JSOn data to be used instead of the real data for now
import exampledata from '../../data/sample-music-data.json';
// These are the TypeScript modesl so we know what shape out data should be
import { Artist } from './../models/artists.model';
import { Album } from '../models/albums.model';

// This decorator is what makes the service injectyable across the whole application
@Injectable({ providedIn: 'root' })
export class MusicServiceService {

  // This will load the album array with the mock data when the service starts
  albums: Album[] = exampledata;

  /**
   * 
   * getArtist() - pulls all unique artists from the album list. 
   * Set is used here as it automatically will ignore duplicates incase we have two albums from one artist
   */
  public getArtists(): Artist[] {
    let artists: Artist[] = [];
    let artistSet = new Set<string>();
    // Goes through each album and adds the artist to the set if it is new.
    this.albums.forEach(a => artistSet.add(a.artist));
    // The artis name strings are not made into an artist object
    artistSet.forEach(a => artists.push({artist: a}))
    return artists;
  }
/**
 * 
 * getAlbums() - Grabs all albums and retuns them as an array. 
 */
  public getAlbums(): Album[] {
    // Return the list of Albums
    return this.albums;
  }
/**
 * 
 * @param artistName 
 * getAlbumsOfArtist() - will return the albums that belong to a specific artist onlin. It will look the albums and only keep the ones that have a matching artist name. 
 */
  public getAlbumsOfArtist(artistName: String): Album[] {

    let albums: Album[] = [];

    // Checks the albums for that hit on the artist
    this.albums.forEach(album => {
      if (album.artist == artistName) {
        albums.push(album);
      }
    });
    return albums;

  }
/**
 * 
 * @param album 
 * createAlbum() - Adds a new album to the array. 
 */
  public createAlbum(album: Album): number {
    // Add a new Album to the list of Albums
    this.albums.push(album);
    return 1;
  }
/**
 * 
 * @param album 
 * updateAlbum() - find the album by IS and will replace it with the data entered for the new album. 
 */
  public updateAlbum(album: Album): number {
    // Search for the Album in the list of Albums and replace it in the list
    for (let i = 0; i < this.albums.length; ++i) {
      if (this.albums[i].albumId == album.albumId) {
        // this indicated the album aws found and swaps it with the new one
        this.albums.splice(i, 1, album);
        return 0;
      }
    }
    // returned if the album being updated does not exist
    return -1;
  }
/**
 * 
 * @param id 
 * deleteAlbum() - finds the album by ID and removes it from the list. 
 */
  public deleteAlbum(id: number): number {
    // Search for the Album in the list of Albums and delete from the list
    for (let i = 0; i < this.albums.length; ++i) {
      if (this.albums[i].albumId == id) {
        // album is found and deleted.
        this.albums.splice(i, 1);
        return 0;
      }
    }
    // album with the id was not found to delete
    return -1;
  }
}


