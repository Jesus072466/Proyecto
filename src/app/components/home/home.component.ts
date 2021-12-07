import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  data = [
    { img: "https://estaticos.muyinteresante.es/uploads/images/gallery/596dc6d85bafe889683c9872/huron-bebe-redes.jpg", title: "Slide 1" },
    { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img2.jpg", title: "Slide 2" },
    { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg", title: "Slide 3" },
  ];

}
