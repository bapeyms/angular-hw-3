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
  }
  backToGallery() {
    this.selectedPicture = undefined;
  }

  toggleDescription() {
    this.isDescriptionVisible = !this.isDescriptionVisible;
  }
}
