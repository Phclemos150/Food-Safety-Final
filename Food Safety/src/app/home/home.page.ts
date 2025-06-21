import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FavoritosService } from '../services/favorites.service';
import { ToastController } from '@ionic/angular';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  receitaDoDia: any;
  categorias: any[] = [];
  populares: any[] = [];
  sugestao: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private favoritosService: FavoritosService,
    private toastController: ToastController,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.buscarReceitaDoDia();
    this.buscarCategorias();
    this.buscarPopulares('Beef');
    this.buscarSugestao('Seafood');
  }

  toggleTheme() {
    document.body.classList.toggle('dark');
  }

  irParaUsuario() {
    this.router.navigate(['/usuario']);
  }


  irParaPoliticas() {
    this.router.navigate(['/politicas']);
  }

  irParaTemas() {
    this.router.navigate(['/temas']);
  }

  buscarReceitaDoDia() {
    this.http.get<any>('https://www.themealdb.com/api/json/v1/1/random.php')
      .subscribe(async res => {
        this.receitaDoDia = res.meals[0];
        this.receitaDoDia.strMeal = await this.translationService.traduzir(this.receitaDoDia.strMeal);
      });
  }

buscarCategorias() {
  this.http.get<any>('https://www.themealdb.com/api/json/v1/1/categories.php')
    .subscribe(async res => {
      const traduzidas = [];
      for (let categoria of res.categories) {
        const traducao = await this.translationService.traduzir(categoria.strCategory);
        traduzidas.push({
          original: categoria.strCategory,
          traduzida: traducao
        });
      }
      this.categorias = traduzidas;
    });
}


  buscarPopulares(categoria: string) {
    this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`)
      .subscribe(async res => {
        this.populares = res.meals.slice(0, 2);
        for (let receita of this.populares) {
          receita.strMeal = await this.translationService.traduzir(receita.strMeal);
        }
      });
  }

  buscarSugestao(categoria: string) {
    this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`)
      .subscribe(async res => {
        this.sugestao = res.meals[0];
        this.sugestao.strMeal = await this.translationService.traduzir(this.sugestao.strMeal);
      });
  }

  abrirDetalhe(id: string) {
    this.router.navigate(['/detalhe', id]);
  }

abrirCategoria(nomeOriginal: string) {
  this.router.navigate(['/categoria', nomeOriginal]);
}


  toggleFavorito(receita: any) {
    const mensagem = this.isFavorito(receita.idMeal)
      ? 'Removido dos favoritos'
      : 'Adicionado aos favoritos';

    this.favoritosService.toggleFavorito(receita);
    this.mostrarToast(mensagem);

    this.populares = [...this.populares];
    this.receitaDoDia = { ...this.receitaDoDia };
    this.sugestao = { ...this.sugestao };
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
