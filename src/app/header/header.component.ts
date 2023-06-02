import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedLanguage: string = 'en'; // Langue par défaut

  constructor(private translateService: TranslateService) {}
  changeLanguage(selectedLanguage: string) {
    this.translateService.use(selectedLanguage);
  }
}
