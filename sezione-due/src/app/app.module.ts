import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RicettarioComponent } from './ricettario/ricettario.component';
import { HeaderComponent } from "./ricettario/header/header.component";
import { ShoppingListComponent } from './ricettario/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './ricettario/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './ricettario/recipes/recipe-detail/recipe-detail.component';
import { RecipesListComponent } from './ricettario/recipes/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './ricettario/recipes/recipes-list/recipe-item/recipe-item.component';
import { RecipesComponent } from './ricettario/recipes/recipes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        RicettarioComponent,
        HeaderComponent,
        ShoppingListComponent,
        ShoppingEditComponent,
        RecipeDetailComponent,
        RecipesListComponent,
        RecipeItemComponent,
        RecipesComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule
    ]
})
export class AppModule { }
