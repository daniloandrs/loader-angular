import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton,IonInput,
  IonItem,IonList,IonRow,IonCol
 } from '@ionic/angular/standalone';
import { BtnSliderComponent } from '../components/btn-slider/btn-slider.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonButton,
    IonInput,
    IonItem,
    IonList,
    IonRow,
    IonCol,
    CommonModule, 
    FormsModule,
    BtnSliderComponent
  ]
})
export class MainPage implements OnInit {

  
  constructor(
    private router : Router
  ){}

  timeSlide:number = 1000;

  timeRequest:number = 8000;

  loader!:boolean;

  slides: {
    image:string,
    text:string
  }[] = []
  ngOnInit() {
    this.setSlides()
  }


  setSlides () {
    this.slides = [
      { image: 'https://picsum.photos/500/800?random=1', text: 'Primera imagen' },
      { image: 'https://picsum.photos/500/800?random=2', text: 'Segunda imagen' },
      { image: 'https://picsum.photos/500/800?random=3', text: 'Tercera imagen' }
    ]
  }

  fetchApi() {
    this.loader = true
    setTimeout(() => {
      this.loader = false
    }, this.timeRequest);
  }

  onFinishSlider() {
    this.router.navigate(['/page-two'])
  }
}
