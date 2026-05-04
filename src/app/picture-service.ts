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
    },
    {
      id: 7,
      title: 'Anxiety',
      author: 'Edvard Munch',
      year: 1894,
      size: '94 x 74 cm',
      location: 'Munch Museum, Oslo',
      image: '/anxiety.jpg'
    },
    {
      id: 8,
      title: 'The Dance of Life',
      author: 'Edvard Munch',
      year: 1899,
      size: '125 x 191 cm',
      location: 'National Gallery, Oslo',
      image: '/the_dance_of_life.jpg'
    },
    {
      id: 9,
      title: 'Vampire',
      author: 'Edvard Munch',
      year: 1893,
      size: '91 x 109 cm',
      location: 'Munch Museum, Oslo',
      image: '/vampire.jpg'
    },
    {
      id: 10,
      title: 'The Last Supper',
      author: 'Leonardo da Vinci',
      year: 1498,
      size: '460 x 880 cm',
      location: 'Santa Maria delle Grazie, Milan',
      image: '/the_last_supper.webp'
    },
    {
      id: 11,
      title: 'Lady with an Ermine',
      author: 'Leonardo da Vinci',
      year: 1490,
      size: '54 x 39 cm',
      location: 'Czartoryski Museum, Kraków',
      image: '/lady_with_an_ermine.jpg'
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
