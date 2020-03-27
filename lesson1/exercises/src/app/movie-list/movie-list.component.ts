import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Frozen', 'The Avengers', 'Congo(not really)', 'The Manchurian Candidate', 'Oceans 8', 'Cloverfield', 'District 9'];

   constructor() { }

   ngOnInit() {
   }

}
