import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../submission.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css'],
})
export class WatchlistPageComponent implements OnInit {
  favorites: any = [];
  baseUrl: string = 'https://image.tmdb.org/t/p/w154';

  constructor(private service: SubmissionService, private router: Router) {}

  ngOnInit(): void {
    this.favorites = this.service.getFavs();
  }

  toHome = () => {
    this.router.navigate(['home']);
  };

  deleteFav = (index) => {
    this.favorites.splice(index, 1);
  };
}
