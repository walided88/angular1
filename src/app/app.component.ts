import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
  

  <h1>{{ 'Bienvenue sur notre site !' | translate }}</h1>

`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
navigateToUserManagement() {
throw new Error('Method not implemented.');
}
navigateToHome() {
throw new Error('Method not implemented.');
}
changeLanguage(arg0: any) {
throw new Error('Method not implemented.');
}

  showGestionUtilisateurs = false;
  title = 'tp2';
selectedLanguage: any;
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en'); 
    this.translateService.use('en');
  }

  toggleGestionUtilisateurs() {
    this.showGestionUtilisateurs = !this.showGestionUtilisateurs;
  }
}
