import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simple a test',
      'https://media.istockphoto.com/photos/choose-the-way-picture-id921878978?k=20&m=921878978&s=170667a&w=0&h=JCTursWLztQ39kgl8n30AhcumDumq19mt8lsPfQvJl0='
    ),
    new Recipe(
      'A Test Recipe',
      'This is simple a test',
      'https://media.istockphoto.com/photos/choose-the-way-picture-id921878978?k=20&m=921878978&s=170667a&w=0&h=JCTursWLztQ39kgl8n30AhcumDumq19mt8lsPfQvJl0='
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
