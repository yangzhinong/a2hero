import { Component,Input, OnInit } from '@angular/core';
import {Hero} from "../class/Hero.class"


@Component({
    selector: 'my-hero-detail',
    template: `
    <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label> {{hero.id}}</div>
        <div>
              <label>name:</label>
              <input [(ngModel)]="hero.name" placeholder="name" />
        </div>
    </div>
    `
})
export class HeroDetailComponent implements OnInit {
    constructor() { }

    ngOnInit() { }


    @Input()
    hero:Hero;
    
}