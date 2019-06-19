import { Component, OnInit, RootRenderer } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    loadedRecipe: Recipe;

    constructor(
        private activatedRoute: ActivatedRoute,
        private recipeService: RecipesService,
        private router: Router,
        private alertController: AlertController
    ) {}

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('recipeId')) {
                // redirect
                this.router.navigate(['/recipes']);
                return;
            }
            const recipeId = paramMap.get('recipeId');
            this.loadedRecipe = this.recipeService.getRecipe(recipeId);
        });
    }

    onDeleteRecipe() {
        this.alertController.create({
            header: 'Delete recipe?',
            message: 'Do you really want to delete the recipe?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: () => {
                        this.recipeService.deleteRecipe(this.loadedRecipe.id);
                        this.router.navigate(['/recipes']);
                    }
                }
            ]
        }).then(alertEl => {
            alertEl.present();
        });
    }
}
