import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    loadedRecipe: Recipe;

    constructor(
        private activatedRoute: ActivatedRoute,
        private recipeService: RecipesService
    ) {}

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('recipeId')) {
                // redirect
                return;
            }

            const recipeId = paramMap.get('recipeId');
            this.loadedRecipe = this.recipeService.getRecipe(recipeId);
        });
    }

}
