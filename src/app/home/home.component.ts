import { Component, OnInit } from '@angular/core';
import { SetsDto } from './home-service';

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
  teachers:SetsDto[]=[
    {
      img:'../../assets/images/person-03.jpg',
      name: 'أ.رائد محمد المصرى',
      rate: 5.5,
      subject: 'دراسات اجتماعية',
      subjectEnum: undefined,
      location: 'مدرسة طوخ الاعدادية بنين',
      price: 50,
      color: '#F49F27'
    },
    {
      img:'../../assets/images/person-03.jpg',
      name: 'أ.محمد عمر',
      rate: 4.5,
      subject: 'لغة انجليزية',
      subjectEnum: undefined,
      location: 'مدرسة طوخ الاعدادية بنين',
      price: 60,
      color: '#1FB380'
    },
    {
      img:'../../assets/images/person-03.jpg',
      name: 'أ.محمد عمر',
      rate: 4.0,
      subject: 'لغة عربية',
      subjectEnum: undefined,
      location: 'مدرسة طوخ الاعدادية بنين',
      price: 40,
      color: '#754DCC'
    },
    {
      img:'../../assets/images/person-03.jpg',
      name: 'أ.محمد عمر',
      rate: 3.5,
      subject: 'لغة عربية',
      subjectEnum: undefined,
      location: 'مدرسة طوخ الاعدادية بنين',
      price: 30,
      color: '#754DCC'
    }
  ];
  sets:SetsDto[]=[
    {
      img: undefined,
      name: 'أ.رائد محمد المصرى',
      rate: 5.5,
      subject: 'دراسات اجتماعية',
      subjectEnum: 1,
      location: 'مدرسة طوخ الاعدادية بنين',
      price: 50,
      color: '#F49F27'
    },
    {
      img: undefined,
      name: 'أ.محمد عمر',
      rate: 4.5,
      subject: 'لغة عربية',
      subjectEnum: 2,
      location: 'مدرسة طوخ الاعدادية بنين',
      price: 60,
      color: '#754DCC'
    },
    {
      img: undefined,
      name: 'أ.محمد عمر',
      rate: 4.0,
      subject: 'لغة إنجليزية',
      subjectEnum: 3,
      location: 'مدرسة طوخ الاعدادية بنين',
      price: 40,
      color: '#1FB380'
    },
    {
      img: undefined,
      name: 'أ.محمد عمر',
      rate: 3.5,
      subject: 'علوم',
      subjectEnum: 4,
      location: 'مدرسة طوخ الاعدادية بنين',
      price: 30,
      color: '#754DCC'
    }
  ];
  subjectsRate:any[]=[
    {
      name: 'لغة عربية',
      rate: 77,
      houres: 12,
      totalHoures: 16
    },
    {
      name: 'لغة انجليزية',
      rate: 46,
      houres: 8,
      totalHoures: 16
    },
    {
      name: 'لغة فرنسية',
      rate: 54,
      houres: 10,
      totalHoures: 16
    },
    {
      name: 'فيزياء',
      rate: 85,
      houres: 15,
      totalHoures: 16
    }
  ];
  filterValue: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  changeFilterVal(filterValue: number){
    this.filterValue = filterValue;
  }
}
