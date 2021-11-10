import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.scss'],
})
export class ImageLoaderComponent implements OnInit {
  @Input() src: string;

  loadedImage: boolean;

  ngOnInit(): void {
    this.loadImage();
  }

  loadImage(): void {
    if (this.src) {
      this.loadedImage = false;

      const image = new Image();
      image.src = this.src;

      image.onload = () => {
        console.log('loaded');
      };
    }
  }
}
