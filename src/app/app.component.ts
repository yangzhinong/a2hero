import { Component,OnInit } from '@angular/core';


import {Hero} from "../class/Hero.class"
import {HeroService} from "../services/hero"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HeroService]
})
export class AppComponent implements OnInit {
  title = 'My First Angular app works!';
  selectedHero:Hero;//= HEROES[0];
  heroes:Hero[];
  
  constructor(private heroService:HeroService){
    //this.heroes= heroService.getHeroes();
    
  }

  getHeroes(){
    this.heroService.getHeroes().then(heroes=> this.heroes=heroes);
  }

  onSelect(hero:Hero){
    this.selectedHero=hero;
  }

  ngOnInit(){
    this.getHeroes();
  }



}
