import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { TaskModalPage } from '../task-modal/task-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  tarefas: any[] = [];
  nomeUsuario: string = '';
  constructor(private modalController: ModalController, private alertController: AlertController) {}
  ionViewWillEnter() {
    const nomeUsuarioArmazenado = localStorage.getItem('user');
    if (nomeUsuarioArmazenado) {
      this.nomeUsuario = nomeUsuarioArmazenado;
    }
  }
  async abrirModal() {
    const modal = await this.modalController.create({
      component: TaskModalPage
    });

    modal.onDidDismiss().then((data) => {
      if (data.data && data.data.tarefa) {
        this.tarefas.push(data.data.tarefa);
      }
    });

    return await modal.present();
  }

  async excluirTarefa(tarefa: any) {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Deseja excluir esta tarefa?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            const index = this.tarefas.indexOf(tarefa);
            if (index > -1) {
              this.tarefas.splice(index, 1);
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async editarTarefa(tarefa: any) {
    const modal = await this.modalController.create({
      component: TaskModalPage,
      componentProps: {
        tarefa: tarefa
      }
    });

    modal.onDidDismiss().then((data) => {
      if (data.data && data.data.tarefa) {
        tarefa = data.data.tarefa;
      }
    });

    return await modal.present();
  }

  async concluirTarefa(tarefa: any) {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Deseja marcar esta tarefa como concluída?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Concluir',
          handler: () => {
            const index = this.tarefas.indexOf(tarefa);
            if (index > -1) {
              this.tarefas.splice(index, 1);
              this.mostrarMensagemConcluida();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async mostrarMensagemConcluida() {
    const alert = await this.alertController.create({
      header: 'Concluída!',
      message: 'Tarefa concluída com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
  }
}
