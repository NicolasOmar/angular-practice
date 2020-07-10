import { Ingredient } from './ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Array<Ingredient>;

  constructor(name: string, desc: string, imgPath: string, ingr: Array<Ingredient>) {
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
    this.ingredients = ingr;
  }
}