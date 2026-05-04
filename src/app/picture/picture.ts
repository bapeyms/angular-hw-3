import { Component, OnInit } from '@angular/core';
import { PictureService, Painting } from '../picture-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './picture.html',
  styleUrl: './picture.css',
})
export class Picture implements OnInit {
  
  allPictures: Painting[] = [];
  selectedPicture?: Painting;

  isDescriptionVisible: boolean = false;

  constructor(private pictureService: PictureService) {}

  ngOnInit() {
    this.allPictures = this.pictureService.getAll();
  }
  selectPicture(p: Painting) {
    this.selectedPicture = p;
    window.scrollTo(0, 0);
  }
  backToGallery() {
    this.selectedPicture = undefined;
  }
  getOtherAuthorWorks() :Painting[] {
    if(!this.selectedPicture) {
      return []
    }
    return this.allPictures.filter(p =>
      p.author === this.selectedPicture?.author &&
      p.id !== this.selectedPicture?.id
    )
  }

  toggleDescription() {
    this.isDescriptionVisible = !this.isDescriptionVisible;
  }
}
