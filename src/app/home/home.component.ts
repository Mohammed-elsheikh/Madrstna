import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "arrows": false,
    "dots": false,
    "autoplay": true,
    "rtl": true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2
            }
        }
    ]
  };
  setsConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "arrows": false,
    "dots": false,
    "autoplay": true,
    "rtl": true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2
            }
        }
    ]
  }
  popularSlideConfig ={
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "arrows": false,
    "dots": false,
    "autoplay": true,
    "rtl": true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1
            }
        }
    ]
  }
  teachers:any[]=[
    {
      img:'../../assets/images/person-03.jpg',
      name: 'أ.رائد محمد المصرى',
      rate: 5.5,
      subject: 'دراسات اجتماعية',
      location: 'مدرسة طوخ الاعدادية بنين',
      price: 50
    },
    {
      img:'../../assets/images/person-03.jpg',
      name: 'أ.محمد عمر',
      rate: 4.5,
      subject: 'لغة عربية',
      location: 'مدرسة طوخ الاعدادية بنين',
      price: 60
    },
    {
      img:'../../assets/images/person-03.jpg',
      name: 'أ.محمد عمر',
      rate: 4.0,
      subject: 'لغة عربية',
      location: 'مدرسة طوخ الاعدادية بنين',
      price: 40
    },
    {
      img:'../../assets/images/person-03.jpg',
      name: 'أ.محمد عمر',
      rate: 3.5,
      subject: 'لغة عربية',
      location: 'مدرسة طوخ الاعدادية بنين',
      price: 30
    }
  ];
  sets:any[]=[
    {
      name: 'أ.رائد محمد المصرى',
      rate: 5.5,
      subject: 'دراسات اجتماعية',
      location: 'مدرسة طوخ الاعدادية بنين',
      price: 50
    },
    {
      name: 'أ.محمد عمر',
      rate: 4.5,
      subject: 'لغة عربية',
      location: 'مدرسة طوخ الاعدادية بنين',
      price: 60
    },
    {
      name: 'أ.محمد عمر',
      rate: 4.0,
      subject: 'لغة عربية',
      location: 'مدرسة طوخ الاعدادية بنين',
      price: 40
    },
    {
      name: 'أ.محمد عمر',
      rate: 3.5,
      subject: 'لغة عربية',
      location: 'مدرسة طوخ الاعدادية بنين',
      price: 30
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
