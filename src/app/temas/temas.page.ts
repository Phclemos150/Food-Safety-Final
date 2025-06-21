import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.page.html',
  styleUrls: ['./temas.page.scss'],
  standalone: false
})
export class TemasPage{

  constructor(private router: Router) {}

  irParaHome() {
    this.router.navigate(['tabs/home']);
  }

}
