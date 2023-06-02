import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


interface Utilisateur {
  isSuppression: boolean;
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  isActionVisible?: boolean;
}

@Component({
  selector: 'app-gestion-utilisateurs',
  templateUrl: './gestion-utilisateurs.component.html',
  styleUrls: ['./gestion-utilisateurs.component.css']
})
export class GestionUtilisateursComponent implements OnInit {
  utilisateurs: any[] = [];


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUtilisateurs();
  }

  getUtilisateurs() {
    this.http.get<any>(environment.apiPrefix + 'users').subscribe(
      response => {
        this.utilisateurs = response.data.map((utilisateur: Utilisateur) => ({
          ...utilisateur,
          isSuppression: false
        }));
      },
      (error: HttpErrorResponse) => {
        console.error('Une erreur s\'est produite lors de la récupération des utilisateurs:', error.message);
      }
    );
  }



  mettreAJourUtilisateur(utilisateur: Utilisateur) {
    
  }
  
  supprimerUtilisateur(utilisateur: Utilisateur) {
    const index = this.utilisateurs.indexOf(utilisateur);
    if (index !== -1) {
      this.utilisateurs.splice(index, 1);
    }
  }
}
