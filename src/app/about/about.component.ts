import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  logos = [
    {
      name: 'HTML',
      src: '/assets/img/logo/html.png',
    },
    {
      name: 'CSS',
      src: '/assets/img/logo/css.png',
    },
    {
      name: 'Sass',
      src: '/assets/img/logo/sass.svg',
    },
    {
      name: 'Bootstrap',
      src: '/assets/img/logo/bootstrap.svg',
    },
    {
      name: 'JavaScript',
      src: '/assets/img/logo/js.png',
    },
    {
      name: 'TypeScript',
      src: '/assets/img/logo/typescript.svg',
    },
    {
      name: 'Angular',
      src: '/assets/img/logo/angular.svg',
    },
    {
      name: 'React',
      src: '/assets/img/logo/react.svg',
    },
    {
      name: 'MySqul',
      src: '/assets/img/logo/mysql.svg',
    },
    {
      name: 'php',
      src: '/assets/img/logo/php.svg',
    },
    {
      name: 'symfony',
      src: '/assets/img/logo/symfony.svg',
    },
    {
      name: 'Java',
      src: '/assets/img/logo/javaLogo.svg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
