import { Component, OnInit } from '@angular/core';
import { TemasService } from './services/tema.service'; 
import { Platform } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private temasService: TemasService, private platform: Platform) {
    this.initializeApp();
  }

  ngOnInit() {
    this.temasService.loadTheme();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      StatusBar.setStyle({ style: Style.Dark });


      StatusBar.setBackgroundColor({ color: '#ffffff' });


      StatusBar.setOverlaysWebView({ overlay: false });
    });
  }
}
