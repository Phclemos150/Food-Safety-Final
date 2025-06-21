import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.page.html',
  styleUrls: ['./lista-compras.page.scss'],
  standalone: false
})
export class ListaComprasPage {
  novoItem: string = '';
  lista: { nome: string; comprado: boolean }[] = [];

  adicionarItem() {
    const nome = this.novoItem.trim();
    if (nome) {
      this.lista.push({ nome, comprado: false });
      this.novoItem = '';
    }
  }

  alternarComprado(item: { nome: string; comprado: boolean }) {
    item.comprado = !item.comprado;
  }

  removerItem(index: number) {
    this.lista.splice(index, 1);
  }
  limparLista() {
  this.lista = [];
}

}