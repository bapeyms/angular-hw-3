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
  
  picture?: Painting;
  isDescriptionVisible: boolean = false;
  constructor(private pictureService: PictureService) {}

  ngOnInit() {
    this.picture = this.pictureService.getById(1);
  }
  toggleDescription() {
    this.isDescriptionVisible = !this.isDescriptionVisible;
  }
}
