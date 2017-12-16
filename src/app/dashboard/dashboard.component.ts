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

  constructor(private auth: AuthService, private http: Http) { }

  ngOnInit() {
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
          this.success = true
          console.log(response)
        },
        err => console.log(err)
      )
  }
}
