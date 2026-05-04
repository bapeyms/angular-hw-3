import { Injectable } from '@angular/core';

export interface Painting {
  id: number;
  title: string;
  author: string;
  year: number;
  size: string;
  location: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class PictureService {

  pictures: Painting[] = [
    {
      id: 1,
      title: 'Mona Lisa',
      author: 'Leonardo da Vinci',
      year: 1503,
      size: '77 x 53 cm',
      location: 'Louvre Museum, Paris',
      image: '/mona_lisa.webp'
    },
    {
      id: 2,
      title: 'The Scream',
      author: 'Edvard Munch',
      year: 1893,
      size: '91 x 73.5 cm',
      location: 'National Gallery, Oslo',
      image: '/the_scream.jpg'
    },
    {
      id: 3,
      title: 'The Starry Night',
      author: 'Vincent van Gogh',
      year: 1889,
      size: '73.7 x 92.1 cm',
      location: 'Museum of Modern Art, New York',
      image: '/the_starry_night.webp'
    },
    {
      id: 4,
      title: 'The Persistence of Memory',
      author: 'Salvador Dali',
      year: 1931,
      size: '24 x 33 cm',
      location: 'Museum of Modern Art, New York',
      image: '/the_persistence_of_memory.jpg'
    },
    {
      id: 5,
      title: 'Café Terrace at Night',
      author: 'Vincent van Gogh',
      year: 1888,
      size: '80.7 x 65.3 cm',
      location: 'Kröller-Müller Museum, Otterlo',
      image: '/cafe_terrace_at_night.jpg'
    },
    {
      id: 6,
      title: 'Irises',
      author: 'Vincent van Gogh',
      year: 1889,
      size: '71 x 93 cm',
      location: 'J. Paul Getty Museum, Los Angeles',
      image: '/irises.jpg'
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
