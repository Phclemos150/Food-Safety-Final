import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compartilhar',
  templateUrl: './compartilhar.page.html',
  styleUrls: ['./compartilhar.page.scss'],
  standalone: false
})
export class CompartilharPage{

  constructor(private router: Router) {}

  irParaHome() {
    this.router.navigate(['tabs/home']);
  }

}
