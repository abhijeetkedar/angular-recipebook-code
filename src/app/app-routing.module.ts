//import { Component, NgModule } from "@angular/core";
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
//import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
//import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
//import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
//import { Recipe } from "./recipes/recipe.model";
//import { RecipesComponent } from "./recipes/recipes.component";
//import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
//import { RecipesResolverService } from "./recipes/recipe-resolver.service";
//import { AuthComponent } from "./auth/auth.component";
//import { AuthGuard } from "./auth/auth.gaurd";

const appRoutes : Routes = [
    { path : '', redirectTo:'/recipes',pathMatch : 'full'},
    { path:'recipes', loadChildren: ()=>import('./recipes/recipes.module').then(m=>m.RecipesModule) },
    { path: 'shopping-list',loadChildren:()=>import('./shopping-list/shopping-list.module').then(m=>m.ShoppingListModule)},
    { path: 'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)}
   
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
    exports : [RouterModule]
})
export class AppRoutingModule{

}