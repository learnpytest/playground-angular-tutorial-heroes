import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
// import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[] = []
  selectedHero?:Hero

  constructor(private heroService:HeroService){}

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes)
  }

  add(name: string): void {
    this.heroService.addHero({name} as Hero)
    .subscribe(hero => {
      this.heroes.push(hero)
    })
  }

  delete(hero: Hero) :void {
    this.heroes = this.heroes.filter(h => h !== hero)
    this.heroService.deleteHero(hero.id)
    .subscribe()
  }

  ngOnInit(): void {
    this.getHeroes()
  }
}