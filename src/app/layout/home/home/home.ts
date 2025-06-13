
import { HttpResourceRef, httpResource } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, inject, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IApod } from '../../../core/interfaces/IApod';
import { NasaService } from '../../../core/services/nasa-service';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-home',
  imports: [
    ScrollingModule,
    MatCardModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit, OnInit {

  @ViewChildren('reveal') sections!: QueryList<ElementRef>;

  Apod: HttpResourceRef<IApod | undefined> = httpResource<IApod | undefined>(() => undefined);

  nasaService = inject(NasaService);

  constructor() {
    this.Apod = this.nasaService.getApod();
    console.log('APOD:', this.Apod);
  }


  ngOnInit(): void {

  }



  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        }
      },
      { threshold: 0.2 }
    );

    this.sections.forEach((section) => {
      observer.observe(section.nativeElement);
    });
  }

  news = {
    title: 'SpaceX lanza nueva misión Starlink',
    url: 'https://www.spacex.com/launches/',
  };

  launch = {
    mission_name: 'Starlink 32-8',
    date: '2025-06-15',
  };

  factOfTheDay =
    'Júpiter es tan grande que todos los demás planetas del sistema solar podrían caber dentro de él.';


}
