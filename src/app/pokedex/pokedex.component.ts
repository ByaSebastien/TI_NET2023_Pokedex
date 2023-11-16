import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { PokemonDetail, PokemonResult } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemonResult!: PokemonResult;
  currentPokemon: PokemonDetail | undefined = undefined;

  constructor(
    private readonly _pokemonService: PokemonService,
    private readonly _http: HttpClient
  ) { }

  ngOnInit(): void {

    this.getMany('https://pokeapi.co/api/v2/pokemon/')
  }

  getMany(url: string) {
    this._pokemonService.getMany(url).subscribe({
      next:
        (data) => {
          this.pokemonResult = data;
          for (let pokemon of this.pokemonResult.results) {

            this._http.get<any>(pokemon.url).subscribe({
              next: (result) => {
                pokemon.sprite = result.sprites.front_default;
              }
            })
          }
        },
    })
  }

  getOne(url: string) {
    this._pokemonService.getOne(url).subscribe({
      next: (data) => {
        this.currentPokemon = data;
      }
    })
  }
  next() {
    if (!this.pokemonResult.next) {
      return;
    }
    this.getMany(this.pokemonResult.next)
  }

  previous() {
    if (!this.pokemonResult.previous) {
      return;
    }
    this.getMany(this.pokemonResult.previous)
  }

}
