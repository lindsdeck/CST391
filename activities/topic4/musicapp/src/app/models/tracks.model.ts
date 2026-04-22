export interface Track {
  trackId: number;
  title: string;
  number: number;
  video: string;
  lyrics: string;
}

export interface Album {
  albumId: number;
  title: string;
  artist: string;
  description: string;
  year: string;
  image: string;
  tracks: Track[];
}