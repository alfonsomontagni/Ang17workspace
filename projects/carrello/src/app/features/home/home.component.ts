import { Component, OnChanges, OnInit, SimpleChanges, signal } from '@angular/core';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common';
import { Tail01Component } from '../../shared/tails/tail01/tail01.component';
import { Tail02Component } from '../../shared/tails/tail02/tail02.component';
import { Tail03Component } from '../../shared/tails/tail02/tail03.component';
import { Tail04Component } from '../../shared/tails/tail02/tail04.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, Tail01Component, Tail02Component,Tail03Component,Tail04Component
  ],
  template: `
 
    <div class="p-2 flex gap-2">
    <button class="btn btn-primary btn-sm" (click)="tailChoices('t01')">Tail 01</button>
    <button class="btn btn-primary btn-sm"  (click)="tailChoices('t02')">Tail 02</button>
    <button class="btn btn-primary btn-sm"  (click)="tailChoices('t03')">Tail 03</button>
    <button class="btn btn-primary btn-sm" (click)="tailChoices('t04')">Tail 04</button>
    <button class="btn btn-primary btn-sm"  (click)="tailChoices('t05')">Tail 05</button>
    <button class="btn btn-primary btn-sm"  (click)="tailChoices('t06')">Tail 06</button>
    <button class="btn btn-primary btn-sm"  (click)="tailChoices('cart')">CARRELLO</button>
    </div>
   
    @switch (tailChoice) {
      @case ("t01") {
        <app-tail01></app-tail01>
    }
      @case ("t02") {
        <app-tail02></app-tail02>
    }

@case ("t03") {
    <app-tail03></app-tail03>
}

@case ("t04") {
    <app-tail04></app-tail04>
}

    @case ("cart"){
    <div class="flex gap-6 overflow-auto">
        @for (product of products(); track product.id) {
            <div class="card w-full bg-base-100 shadow-xl shrink">
                <figure><img class="max-w-[224px] max-h-[314px] w-full h-auto object-cover" 
                 [src]="product.image" [alt]="product.name" /></figure>
                <div class="card-body">
                    <div class="flex justify-between">
                      <h2 class="card-title">{{product.name}}</h2>
                      <div class="card-title">€ {{product.cost}}</div>
                    </div>
                    <p>{{product.description}}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        }
      </div>
      <pre>{{products() | json}}</pre>

  }
    }
   
 

 
    
  `,
  styles: ``
})
export default class HomeComponent implements OnInit, OnChanges {
  ngOnInit(): void {
    console.log("home init")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("home change")
  }
  products = signal<Product[]>(initialState)
  tailChoice = "";
  tailChoices(choice: string) {
    this.tailChoice = choice;
  }
}

const initialState: Product[] = [
  {
    id: 1,
    name: "locazione 1",
    image: "assets/img/kultccg/22-24RueDeSevigne.jpg",
    description: "lorem...",
    cost: 10
  },
  {
    id: 2,
    name: "locazione 2",
    description: "lorem...",
    image: "assets/img/kultccg/44LadbrookeHill.jpg",
    cost: 5
  },
  {
    id: 3,
    name: "locazione 3",
    description: "lorem...",
    image: "assets/img/kultccg/HauptquartierArgente.jpg",
    cost: 2
  },

]