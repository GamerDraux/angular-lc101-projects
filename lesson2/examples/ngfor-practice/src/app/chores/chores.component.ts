import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: 'Yesterday\'s Chores', tasks: ['Pick up dog poop', 'Complete LaunchCode prep work']},
      // tslint:disable-next-line: max-line-length
      {title: 'Today\'s Chores', tasks: ['Pick up dog poop', 'Clean bathroom', 'Get groceries you forgot', 'Complete LaunchCode prep work']},
      {title: 'Tomorrow\'s Chores', tasks: ['Pick up dog poop', 'Clean bathroom', 'Complete LaunchCode prep work']},
      {title: 'Chores for next week', tasks: ['Pick up dog poop', 'Clean bathroom', 'Complete LaunchCode prep work']}
   ];

   constructor() { }

   ngOnInit() {
   }

}
