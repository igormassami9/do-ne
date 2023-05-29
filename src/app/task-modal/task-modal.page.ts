import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.page.html',
  styleUrls: ['./task-modal.page.scss'],
})
export class TaskModalPage implements OnInit {
  modalTitle: string = '';
  tarefa: any = {
    nome: '',
    prazo: '',
    descricao: ''
  };

  constructor(private modalController: ModalController, private navParams: NavParams) {}

  ngOnInit() {
    // Verifica se a tarefa foi passada como parâmetro para a modal
    const tarefaParam = this.navParams.get('tarefa');
    if (tarefaParam) {
      this.modalTitle = 'Editar Tarefa';
      // Copia os valores da tarefa para o objeto atual
      this.tarefa = { ...tarefaParam };
    } else {
      this.modalTitle = 'Criar Tarefa';
    }
  }

  fecharModal() {
    this.modalController.dismiss();
  }

  salvarTarefa() {
    this.modalController.dismiss({
      tarefa: this.tarefa
    });
  }
}
