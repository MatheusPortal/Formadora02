import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonCard, IonToolbar, IonButton, IonRange, RangeCustomEvent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color.change',
  templateUrl: './color.change.page.html',
  styleUrls: ['./color.change.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonCard, IonToolbar, CommonModule, FormsModule, IonButton, IonRange ]
})

export class ColorChangePage {

  constructor(private router: Router) { }


  red: number = 0;
  green: number = 0;
  blue: number = 0;

  buttonColor: string = 'rgb(0, 0, 255)';
  BackColor: string = 'rgb(0, 0, 255)';

  atualizarRed(event: RangeCustomEvent) {
    this.red = Number(event.detail.value);
  }

  atualizarGreen(event: RangeCustomEvent) {
    this.green = Number(event.detail.value);
  }

  atualizarBlue(event: RangeCustomEvent) {
    this.blue = Number(event.detail.value);
  }


  alterarCorBotao() {
    this.buttonColor = `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  alterarCorFundo() {
    this.BackColor = `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  Gohome() {
    this.router.navigate(['/home']);

  }
}
