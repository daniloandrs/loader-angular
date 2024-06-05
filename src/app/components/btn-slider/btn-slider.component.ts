import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit,Output,SimpleChanges,booleanAttribute } from '@angular/core';
import { IonButtons,IonButton, IonRow, IonCol, IonModal, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-btn-slider',
  standalone : true,
  imports : [
    IonButton,
    IonRow,
    IonCol,
    IonModal,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    NgIf,
    NgFor,
    IonRow
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './btn-slider.component.html',
  styleUrls: ['./btn-slider.component.scss'],
})
export class BtnSliderComponent  implements OnInit, OnChanges {

  constructor() { }

  @Input() slides: { image: string, text: string }[] = [];
  
  @Input({transform: booleanAttribute}) isOpen = false;


  @Output() callback = new EventEmitter<void>();
  
  setOpen(isOpen: boolean) {
    this.isOpen = isOpen;
  }

  ngOnInit(): void {
    console.log("hello component btn-slider")
  }

  ngOnChanges(change:SimpleChanges) {
    const {isOpen} = change
    
    if (isOpen === undefined) return

    const {firstChange,currentValue} = isOpen 
    if (firstChange) return

    if (!currentValue) {
      setTimeout(() => {
        this.callback.emit()
      }, 600);
    }
  }
}
