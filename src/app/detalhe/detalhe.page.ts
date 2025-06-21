import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FavoritosService } from '../services/favorites.service';
import { ToastController } from '@ionic/angular';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
  standalone: false,
})
export class DetalhePage implements OnInit {
  receita: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private favoritosService: FavoritosService,
    private toastController: ToastController,
    private translationService: TranslationService
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .subscribe(async res => {
        this.receita = res.meals[0];
        
        
        this.receita.strMeal = await this.translationService.traduzir(this.receita.strMeal);
        
        
        this.receita.strInstructions = await this.traduzirTextoLongo(this.receita.strInstructions);

        
        if (this.receita.strCategory) {
          this.receita.strCategory = await this.translationService.traduzir(this.receita.strCategory);
        }

        
        if (this.receita.strArea) {
          this.receita.strArea = await this.translationService.traduzir(this.receita.strArea);
        }
      });
  }

  private async traduzirTextoLongo(texto: string): Promise<string> {
    if (!texto) return '';

    const maxLen = 500;
    let resultado = '';
    let inicio = 0;

    while (inicio < texto.length) {
      const parte = texto.substring(inicio, inicio + maxLen);
      const traducaoParte = await this.translationService.traduzir(parte);
      resultado += traducaoParte + ' ';
      inicio += maxLen;
    }

    return resultado.trim();
  }

  toggleFavorito() {
    const mensagem = this.isFavorito()
      ? 'Removido dos favoritos'
      : 'Adicionado aos favoritos';

    this.favoritosService.toggleFavorito(this.receita);
    this.mostrarToast(mensagem);
  }

  isFavorito(): boolean {
    return this.receita ? this.favoritosService.isFavorito(this.receita.idMeal) : false;
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
