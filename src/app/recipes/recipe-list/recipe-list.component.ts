import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test", "This is a test","https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://static.onecms.io/wp-content/uploads/sites/43/2022/03/19/238691-Simple-Macaroni-And-Cheese-mfs_008.jpg&w=1280&h=720&q=90&c=cc"),
    new Recipe("A Test", "This is a test","https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://static.onecms.io/wp-content/uploads/sites/43/2022/03/19/238691-Simple-Macaroni-And-Cheese-mfs_008.jpg&w=1280&h=720&q=90&c=cc"),
    new Recipe("A Test", "This is a test","https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://static.onecms.io/wp-content/uploads/sites/43/2022/03/19/238691-Simple-Macaroni-And-Cheese-mfs_008.jpg&w=1280&h=720&q=90&c=cc")
  ]; 
  constructor() { }

  ngOnInit(): void {
  }

}
