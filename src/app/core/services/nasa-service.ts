import { HttpClient, HttpResourceRef, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IApod } from '../interfaces/IApod';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private readonly apiKey = 'r6B3Bv8MELnFXnV8WnPvwZ71PcSAjqArSYhFjAhp';


  http = inject(HttpClient);


  getApod():HttpResourceRef<IApod | undefined> {
    return  httpResource<IApod | undefined>(()=> `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`);
  }

  constructor() { }
}
