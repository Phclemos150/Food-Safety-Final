import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private chaveStorage = 'receitasFavoritas';
  private favoritos: any[] = [];

  constructor() {
    this.carregarFavoritos();
  }

  private carregarFavoritos() {
    const favoritosSalvos = localStorage.getItem(this.chaveStorage);
    this.favoritos = favoritosSalvos ? JSON.parse(favoritosSalvos) : [];
  }

  private salvarFavoritos() {
    localStorage.setItem(this.chaveStorage, JSON.stringify(this.favoritos));
  }

  getFavoritos(): any[] {
    return this.favoritos;
  }

  isFavorito(id: string): boolean {
    return this.favoritos.some(item => item.idMeal === id);
  }

  adicionarFavorito(receita: any) {
    if (!this.isFavorito(receita.idMeal)) {
      this.favoritos.push(receita);
      this.salvarFavoritos();
    }
  }

  removerFavorito(id: string) {
    this.favoritos = this.favoritos.filter(item => item.idMeal !== id);
    this.salvarFavoritos();
  }

  toggleFavorito(receita: any) {
    if (this.isFavorito(receita.idMeal)) {
      this.removerFavorito(receita.idMeal);
    } else {
      this.adicionarFavorito(receita);
    }
  }
}