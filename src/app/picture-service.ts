import { Injectable } from '@angular/core';

export interface Painting {
  id: number;
  title: string;
  author: string;
  year: number;
  size: string;
  location: string;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class PictureService {

  pictures: Painting[] = [
    {
      id: 1,
      title: 'The Starry Night',
      author: 'Vincent van Gogh',
      year: 1889,
      size: '73.7 x 92.1 cm',
      location: 'Museum of Modern Art, New York',
      description: 'The Starry Night is one of the most famous paintings by Vincent van Gogh',
      image: '/the_starry_night.webp'
    }
  ];

  getAll() {
    return this.pictures;
  }
  getById(id: number) {
    return this.pictures.find(p => p.id === id);
  }
  getByAuthor(author: string) {
    return this.pictures.filter(p => p.author === author);
  }
}
