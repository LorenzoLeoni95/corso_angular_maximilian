import { RecipesComponent } from './ricette/recipes/recipes.component';
import { RecipesDetailComponent } from './ricette/recipes/recipes-detail/recipes-detail.component';
import { RecipeListComponent } from './ricette/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './ricette/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './ricette/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './ricette/shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RicetteComponent } from './ricette/ricette.component';
import { HeaderComponent } from './ricette/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RicetteComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipesDetailComponent,
    RecipesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
})
export class AppModule {}
