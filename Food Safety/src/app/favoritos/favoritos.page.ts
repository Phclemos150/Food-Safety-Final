import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../services/favorites.service';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';  

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  standalone: false
})
export class FavoritosPage implements OnInit {
  favoritos: any[] = [];

  constructor(
    private favoritosService: FavoritosService,
    private router: Router,
    private translationService: TranslationService  
  ) {}

  ngOnInit() {
    this.carregarFavoritos();
  }

  async carregarFavoritos() {
    this.favoritos = this.favoritosService.getFavoritos();
    
    for (let receita of this.favoritos) {
      receita.strMeal = await this.translationService.traduzir(receita.strMeal);
    }
  }

  abrirDetalhe(id: string) {
    this.router.navigate(['/detalhe', id]);
  }

  removerFavorito(id: string, event: Event) {
    event.stopPropagation();  
    this.favoritosService.removerFavorito(id);
    this.carregarFavoritos();  
  }
}
