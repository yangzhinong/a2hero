import {Injectable} from '@angular/core'

import {Hero} from "../class/Hero.class"

import * as MockHeroes from "../mocks/mock-heroes"

@Injectable()
export class HeroService{
    getHeroes():Promise<Hero[]>{

        return new Promise(resolve=> {
            setTimeout(() =>{
                resolve(MockHeroes.HEROES);
            }, 5000);
        })
    
       
    }
}