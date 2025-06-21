import { Component } from '@angular/core';
import { MealService } from '../services/meal.service';
import { Router } from '@angular/router';
import { FavoritosService } from '../services/favorites.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-buscar-receitas',
  templateUrl: './buscar-receitas.page.html',
  styleUrls: ['./buscar-receitas.page.scss'],
  standalone: false
})
export class BuscarPage {
  meals: any[] = [];
  searchName: string = '';

  constructor(
    private mealService: MealService,
    private router: Router,
    private favoritosService: FavoritosService,
    private translationService: TranslationService
  ) {}

  irParaMeal(id: string) {
    this.router.navigate(['/meal-detail', id]);
  }

  onSearch() {
    const name = this.searchName.trim();
    if (name.length > 0) {
      this.mealService.getMealByName(name).subscribe(async (response: any) => {
        this.meals = response.meals || [];
        for (let meal of this.meals) {
          meal.strMeal = await this.translationService.traduzir(meal.strMeal);
        }
      });
    } else {
      this.meals = [];
    }
  }

  toggleFavorito(receita: any) {
    this.favoritosService.toggleFavorito(receita);
  }

  isFavorito(id: string): boolean {
    return this.favoritosService.isFavorito(id);
  }
}
