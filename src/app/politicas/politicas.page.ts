import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.page.html',
  styleUrls: ['./politicas.page.scss'],
  standalone: false
})
export class PoliticasPage{

  constructor(private router: Router) {}

  irParaHome() {
    this.router.navigate(['tabs/home']);
  }

}
