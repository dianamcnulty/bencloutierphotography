import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service'
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  photo= <any>{};
  images= <any>[];
  allImages= <any>[];
  loading = false;
  total = 0;
  page = 1;
  limit = 10;
  constructor(public auth: AuthService, private http: Http) { }

  ngOnInit() {
    this.http.get(environment.apiServer + '/photos')
      .subscribe(
        response => {
          this.allImages = response.json().photos;
          this.images = this.allImages.slice(0, (this.limit))
          this.total = this.allImages.length;
          this.loading = false;
          console.log('images is', this.images);
          console.log('allImages is', this.allImages);
        },
        err => console.log(err)
      )
  }
  deletePhoto(id) {
    let config = {}

    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.auth.getUserToken()}
    this.http.delete(environment.apiServer + '/photos/' + id, config)
    .subscribe(
      response => {
        this.ngOnInit()
      },
      err => console.log(err)
    )
  }
  addPhoto() {
    // Create the credentials object.
    const newPhoto = {
      'photo': {
        'url': this.photo.url,
        'caption': this.photo.caption,
        'category': this.photo.category
      }
    }
    let config = {}

    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.auth.getUserToken()}
    // Make the post request. environment.apiServer contains the local server address http://localhost:4741
    console.log('config is', config)
    console.log('newphoto is', newPhoto)
    this.http.post(environment.apiServer + '/photos', newPhoto, config)
      .subscribe(
        response => {
          console.log(response)
          this.ngOnInit();
        },
        err => console.log(err)
      )
  }
  signOut() {
    this.auth.signOut();
  }
  updateImages() {
    const start = 0
    if (this.page > 1) {
      start = (this.page - 1) * this.limit;
    }
    const end = this.page * (this.limit);
    if (end > this.allImages.length){
      end = this.allImages.length;
    }
    this.images = this.allImages.slice(start, end);
  }
  goToPage(pageNum: number): void {
    this.page = pageNum;
    this.updateImages();
  }

  onNext(): void {
    this.page++;
    this.updateImages();
  }

  onPrev(): void {
    this.page--;
    this.updateImages();
  }

}
