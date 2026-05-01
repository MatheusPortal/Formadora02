import { Component, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardContent, IonCard, IonCardSubtitle, IonCardTitle, IonButton, IonInput, IonItem, IonList } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import {Alunos} from "../alunos";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonInput, IonItem, IonList ],
})

export class HomePage {
  alunos: Array<Alunos> = [
    { nome: 'Matheus de Assis Portal', id: 26101721, unidade: 'Bonsucesso', turno : 'Manhã', mensagem: 'Olá, sou o Matheus de Assis Portal.', chave: ''}
  ];

  inputModel = '';
  onInput(event: CustomEvent) {
    const value = (event.target as HTMLIonInputElement).value ?? '';
    this.alunos[0].chave = value as string;

  }

  constructor(private router: Router) { }

  GoColorChanger() {
    this.router.navigate(['/color.change']);

  }
}

