import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ex002',
  standalone: true,
  imports: [],
  template: `
<button (click)="prev()">Prev</button>
    <button (click)="next()">Next</button>

    <!-- TODO #1 : display current index and total images: 1/5, 2/5... -->
    CURRENT INDEX / TOTAL
<!-- Display Current Index and the total of images -->
{{index() + 1}} / {{images().length}}
    
    <hr />
    <img [src]="images()[index()]">
  `,
  styles: ``
})
export class Ex002Component {

  index = signal<number>(0)
  images = signal(images)

  prev() {
    this.index.update(prev => {
      // when index is 0 ==> next image will be the last one
      return (this.index() > 0) ? prev - 1 : this.images().length - 1
    })
  }

  next() {
    this.index.update(prev => {
      // when index is the last one (length-1) ==> next image will be the first one
      return (this.index() < this.images().length - 1) ? prev + 1 : 0
    })
  }
  /*
  index = signal<number>(0)
  images = signal(images)

  // TODO #2: when prev is clicked on first images
  // restart from last images
  prev() {
    this.index.update(prev => {
      return prev - 1
    })
  }

  // TODO #2: when next is clicked on last images
  // restart from first
  next() {
    this.index.update(prev => {
      return prev + 1
    })
  }
  */
}


export const images = [
  'https://fastly.picsum.photos/id/109/200/300.jpg?grayscale&hmac=rgU27XxzIuUNy3p8ynWlLZPHDwRLWWPK0ndKnhHiE-w',
  'https://fastly.picsum.photos/id/186/200/300.jpg?grayscale&hmac=GG3TZw07-fh7pOBItc0RmRWmJ4qdoPY1CKGHwRg2jOw',
  'https://fastly.picsum.photos/id/24/200/300.jpg?grayscale&hmac=KKxV_UPV7lVzYnYMhryVHBscbD38Yq6rEGLlzhtstKk',
  'https://fastly.picsum.photos/id/412/200/300.jpg?grayscale&hmac=Tv6MMkPfbF90OB17cna1wLbN95kGOpS2zvFmN1Jkjns',
  'https://fastly.picsum.photos/id/1074/200/300.jpg?grayscale&hmac=HBiIE_N1a70fGPfZ-YNZj1Mf4iEqXCTgtjI5kdVoEb0'
]