import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
  standalone: false,
})
export class EditarPerfilPage implements OnInit {
  email: string = '';
  nome: string = '';
  sobrenome: string = '';
  telefone: string = '';
  dataNascimento: string = '';

  usuarioUid: string = '';

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.usuarioUid = user.uid;
        this.email = user.email || '';
        const perfilStr = localStorage.getItem('perfil_' + this.usuarioUid);
        const perfil = perfilStr ? JSON.parse(perfilStr) : {};

        this.nome = perfil.nome || '';
        this.sobrenome = perfil.sobrenome || '';
        this.telefone = perfil.telefone || '';
        this.dataNascimento = perfil.dataNascimento || '';
      }
    });
  }

  salvarPerfil() {
    const perfil = {
      nome: this.nome,
      sobrenome: this.sobrenome,
      telefone: this.telefone,
      dataNascimento: this.dataNascimento,
    };

    localStorage.setItem('perfil_' + this.usuarioUid, JSON.stringify(perfil));
    this.router.navigate(['/usuario']);
  }

  voltar() {
    this.router.navigate(['/usuario']);
  }
}
