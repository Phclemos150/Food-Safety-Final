import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  standalone: false
})
export class RegistrarPage {

  email: string = '';
  senha: string = '';

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}

  irParaHome() {
    this.router.navigate(['tabs/home']);
  }
  irParaLogin() {
    this.router.navigate(['usuario']);
  }

  onSubmit() {
    if (this.email && this.senha) {
      this.afAuth.createUserWithEmailAndPassword(this.email, this.senha)
        .then((userCredential) => {
          console.log('Usuário criado:', userCredential.user);
          alert('Conta criada com sucesso!');
          this.router.navigate(['usuario']);

        })
        .catch((error) => {
          console.error('Erro ao criar conta:', error);
          alert('Erro: ' + error.message);
        });
    }
  }

}
