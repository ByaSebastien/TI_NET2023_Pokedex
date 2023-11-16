import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonDetail, PokemonResult } from '../models/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  getMany(url: string): Observable<PokemonResult> {
    return this._http.get<PokemonResult>(url);
  }

  getOne(url: string): Observable<PokemonDetail> {
    return this._http.get<PokemonDetail>(url);
  }
}
