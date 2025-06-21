import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FavoritosService } from '../services/favorites.service';
import { ToastController } from '@ionic/angular';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
  standalone: false,
})
export class CategoriaPage implements OnInit {
  nomeCategoria: string | null = null;
  receitas: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private favoritosService: FavoritosService,
    private toastController: ToastController,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.nomeCategoria = this.route.snapshot.paramMap.get('nome');
    if (this.nomeCategoria) {
      this.carregarReceitasPorCategoria(this.nomeCategoria);
    }
  }

  carregarReceitasPorCategoria(nome: string) {
    this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${nome}`)
      .subscribe(async res => {
        this.receitas = res.meals;
        for (let receita of this.receitas) {
          receita.strMeal = await this.translationService.traduzir(receita.strMeal);
        }
      });
  }

  abrirDetalhe(id: string) {
    this.router.navigate(['/detalhe', id]);
  }

  toggleFavorito(receita: any, event: Event) {
    event.stopPropagation();
    const mensagem = this.isFavorito(receita.idMeal)
      ? 'Removido dos favoritos'
      : 'Adicionado aos favoritos';

    this.favoritosService.toggleFavorito(receita);
    this.mostrarToast(mensagem);
  }

  isFavorito(id: string): boolean {
    return this.favoritosService.isFavorito(id);
  }

  async mostrarToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500,
      color: 'primary',
      position: 'bottom'
    });
    toast.present();
  }
}
