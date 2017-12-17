// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-architecture',
//   templateUrl: './architecture.component.html',
//   styleUrls: ['./architecture.component.css']
// })
// export class ArchitectureComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.css']
})
export class ArchitectureComponent implements OnInit {
  images= <any>[];
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(environment.apiServer + '/photos')
      .subscribe(
        response => {
          const photoList = response.json().photos;
          photoList.forEach(photo => {
            if (photo.category == 'Architecture') {
              this.images.push(photo)
            }
          })
          console.log('photo list is', photoList);
        },
        err => console.log(err)
      )
  }

  expandPhoto(id) {
    console.log('image id is', id)
    console.log('all images', this.images)
    this.images.forEach(image => {
      if(image.id === id) {
        console.log('found it!', image.id)
        document.getElementById('feature').setAttribute('src', image.url);
        if (image.caption) {
          document.getElementById('caption').innerHTML = image.caption;
        }      }
    })
  }

}
