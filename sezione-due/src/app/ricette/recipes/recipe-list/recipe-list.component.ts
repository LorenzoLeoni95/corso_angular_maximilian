import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test ricetta',
      'è un semplice test',
      'https://blog.giallozafferano.it/ricettepanedolci/wp-content/uploads/2020/04/torta-per-bambini-1-720x480.jpeg'
    ),
  ];
  constructor() {}

  ngOnInit() {}
}
