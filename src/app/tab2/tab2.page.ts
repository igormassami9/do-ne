import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  minutos: number = 25;
  segundos: number = 0;
  tempoCorrendo: boolean = false;
  showCompleted: boolean = false;
  timerSubscription: Subscription | undefined;
  pomoDescanso: boolean = false;

   iniciarPomo() {
    this.tempoCorrendo = true;
    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.segundos > 0) {
        this.segundos--;
      } else if (this.minutos > 0) {
        this.minutos--;
        this.segundos = 59;
      } else {
        this.pausaPomo();
        if (this.pomoDescanso) {
          this.pomoDescanso = false;
          this.minutos = 25;
          this.segundos = 0;
        } else {
          this.pomoDescanso = true;
          this.minutos = 5;
          this.segundos = 0;
        }
      }
    });
  }

  pausaPomo() {
    this.tempoCorrendo = false;
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  resetaPomo() {
    this.pausaPomo();
    this.minutos = 25;
    this.segundos = 0;
    this.pomoDescanso = false;
  }
}