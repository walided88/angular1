import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  title = 'tp2';
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en'); 
    this.translateService.use('en');
  }

}
