import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { provideImgixLoader, IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';

@Component({
  selector: 'tut1-les11',
  imports: [NgOptimizedImage],
  templateUrl: './les11.component.html',
  styleUrl: './les11.component.scss',
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        console.log(config);
        return `/assets/${config.src}`;
      },
    }
  ]
})
export class Les11Component {
  logoUrl = 'logo.jpg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
