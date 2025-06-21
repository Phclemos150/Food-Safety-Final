import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
  standalone: false
})
export class UsuarioPage implements OnInit {

  email: string = '';
  senha: string = '';
  usuarioLogado: any = null;
  perfilExtra: any = {
    nome: '',
    sobrenome: '',
    telefone: '',
    dataNascimento: ''
  };

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      this.usuarioLogado = user;
      if (user) {
        const perfilStr = localStorage.getItem('perfil_' + user.uid);
        this.perfilExtra = perfilStr ? JSON.parse(perfilStr) : {
          nome: '',
          sobrenome: '',
          telefone: '',
          dataNascimento: ''
        };
      }
    });
  }

  irParaHome() {
    this.router.navigate(['tabs/home']);
  }

  irParaRegistrar() {
    this.router.navigate(['registrar']);
  }

  editarPerfil() {
    this.router.navigate(['editar-perfil']);
  }

  async apresentarToast(mensagem: string, cor: string = 'success') {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      position: 'top',
      color: cor
    });
    toast.present();
  }

  login() {
    if (this.email && this.senha) {
      this.afAuth.signInWithEmailAndPassword(this.email, this.senha)
        .then(async res => {
          this.usuarioLogado = res.user;
          await this.apresentarToast('Login realizado com sucesso!', 'success');
          this.irParaHome();
        })
        .catch(async err => {
          await this.apresentarToast('Erro ao logar: ' + err.message, 'danger');
        });
    }
  }

  logout() {
    this.afAuth.signOut().then(async () => {
      this.usuarioLogado = null;
      await this.apresentarToast('Logout realizado!', 'warning');
    });
  }
}
