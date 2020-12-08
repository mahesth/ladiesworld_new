import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';

@Component({
  selector: 'app-ads-form',
  templateUrl: './ads-form.component.html',
  styleUrls: ['./ads-form.component.css'],
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [    
        query(':enter, :leave', style({ position: 'fixed', width:'100%' })),
        group([ 
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
          ]),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))]),
        ])
      ])
    ])
   ],
})
export class AdsFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
