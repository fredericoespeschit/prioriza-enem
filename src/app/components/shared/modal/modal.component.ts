import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  openModal = () => document.getElementById("modal-add-new-question").classList.add("active");
  closeModal = () => {
  document.getElementById("modal-add-new-question").classList.remove("active");
  document.getElementById("register-question").addEventListener("click", openModal);
  document.getElementById("modal-close").addEventListener("click", closeModal);
  };
}
