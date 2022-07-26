import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'Code Review 18',
      date: '26.07.2022',
      image: '/assets/img/cr-img/cr18.png',
      tech: 'React - Expense Tracker ',
      description:
        'user can add Expense and filter the Expenses   with Visual Chart',
      git: 'https://github.com/puoyan/expense_tracker',
      leftPosition: '',
    },
    {
      name: 'Code Review 17',
      date: '08.07.2022',
      image: '/assets/img/logo/react.svg',
      tech: 'React - bubble sort visualization ',
      description:
        ' generate the new Array with random numbers,and visualizie them on DOM',
      git: 'https://github.com/puoyan/Bubble_Sorting_React',
      leftPosition: 'timeline-inverted',
    },
    {
      name: 'Code Review 16',
      date: '27.06.2022',
      image: '/assets/img/Java.png',
      tech: 'Java - Banking Application',
      description:
        'able to add new Custumer,Initial first transaction,add new transaction for existing Customer, print the list of Branchs,and transaction of all Customer',
      git: 'https://github.com/puoyan/Banking',
      leftPosition: '',
    },
    {
      name: 'Code Review 15',
      date: '21.06.2022',
      image: '/assets/img/Java.png',
      tech: 'Java - Mobile Phone Contact list',
      description:
        'able to store, modify, remove and query contact name,Qiut,print list of contact, and search/find contact',
      git: 'https://github.com/puoyan/Mobile_Phone-_Contact_List',
      leftPosition: 'timeline-inverted',
    },

    {
      name: 'Code Review 14',
      date: '25.05.2022',
      image: '/assets/img/Java.png',
      tech: 'Java - Student Database Application ',
      description:
        'Ask the user how many new students will be added to the database - The user should be prompted to enter the name and year for each student - The student should have a 5-digit unique ID, with the first number being their grade level -A student can enroll in the courses - The student should be able to view their balance and pay the tuition  -To see the status of the student, we should see their name, ID, courses enrolled, and balance',
      git: 'https://github.com/puoyan/Student_Database_Application',
      leftPosition: ' ',
    },
    {
      name: 'Code Review 13',
      date: '25.05.2022',
      image: '/assets/img/Java.png',
      tech: 'Java - Student Database Application ',
      description:
        'Ask the user how many new students will be added to the database - The user should be prompted to enter the name and year for each student - The student should have a 5-digit unique ID, with the first number being their grade level -A student can enroll in the courses - The student should be able to view their balance and pay the tuition  -To see the status of the student, we should see their name, ID, courses enrolled, and balance',
      git: 'https://github.com/puoyan/Student_Database_Application',
      leftPosition: 'timeline-inverted',
    },
    {
      name: 'myPortfolio',
      date: '16.03.2022',
      image: '/assets/img/cr-img/Portfolio.png',
      tech: 'Angular TypeScript HTML SCSS Bootstrap npmjs library',
      description: 'had fun using the tools i learned to create this portfolio',
      git: 'https://github.com/puoyan/myPortfolio_v03',
      leftPosition: '',
    },
    {
      name: 'Projects Full-Stack',
      date: '16.09.2021',
      image: '/assets/img/cr-img/backEndProject.png',
      tech: 'PHP mySqul Symfony Bootstrap Scss HTML ',
      description:
        'MealPlaner - Team of 5 we used: Trello Bord in scrum style and Mindmap to organize our work, daily Zoom Meetings kept us up to date.using all tools that we learn in our course',
      git: 'https://github.com/markotomic93/Team-3-MealPlanner-Project',
      leftPosition: 'timeline-inverted',
    },
    {
      name: 'Code Review 12',
      date: '28.08.2021',
      image: '/assets/img/cr-img/cr12.png',
      tech: 'PHP mySql - API',
      description:
        'Travel agency - using CRUD (create/read/update/delete)-google maps API to show the location',
      git: 'https://github.com/puoyan/CF-CR12-Pouyan',
      leftPosition: '',
    },
    {
      name: 'Code Review 11',
      date: '21.08.2021',
      image: '/assets/img/cr-img/cr11.png',
      tech: 'PHP - MY SQL',
      description: 'Animal adoption platform with Login(Admin and user)',
      git: 'https://github.com/puoyan/FE21-CR11-Pouyan',
      leftPosition: 'timeline-inverted',
    },
    {
      name: 'Code Review 10',
      date: '18.08.2021',
      image: '/assets/img/cr-img/cr10.png',
      tech: 'php mySql',
      description: 'Library web application',
      git: 'https://github.com/puoyan/FE21-CR10-Pouyan',
      leftPosition: '',
    },
    {
      name: 'Code Review 9',
      date: '07.08.2021',
      image: '/assets/img/cr-img/cr9.png',
      tech: 'MySqul - 3rd Normal Form - DB query',
      description: 'Database for the e-commerce site, "Famazon"',
      git: 'https://github.com/puoyan/FE21_CR9_Pouyan',
      leftPosition: 'timeline-inverted',
    },
    {
      name: 'frontEnd Project',
      date: '19.07.2021',
      image: '/assets/img/cr-img/frontEndProject.png',
      tech: 'Angular Bootstrap HTML SCSS TypeScript',
      description:
        'Team of 3 we used: Trello Bord in scrum style and Mindmap to organize our work, daily Zoom Meetings kept us up to date.',
      git: 'https://github.com/AaronWeber90/Team6Project',
      leftPosition: '',
    },
    {
      name: 'Code Review 6',
      date: '16.07.2021',
      image: '/assets/img/cr-img/cr6.png',
      tech: 'Angular Bootstrap HTML CSS TypeScript',
      description:
        'Creating a travel page using interactive cart functionality',
      git: 'https://github.com/puoyan/Student_Database_Application',
      leftPosition: 'timeline-inverted',
    },
    {
      name: 'Code Review 5',
      date: '09.07.2021',
      image: '/assets/img/cr-img/cr5.png',
      tech: 'Bootstrap HTML SCSS TypeScript',
      description:
        'Creating a blog that utilizes dynamic page generation using classes and objects',
      git: 'https://github.com/puoyan/FE21-CR05-Pouyan',
      leftPosition: '',
    },
    {
      name: 'Code Review 4',
      date: '02.07.2021',
      image: '/assets/img/cr-img/cr4.png',
      tech: 'Bootstrap HTML SCSS TypeScript Json',
      description:
        'Generating a site dynamically from a .json file via javascript and using a sort function',
      git: 'https://github.com/puoyan/FE21-CR04-Pouyan',
      leftPosition: 'timeline-inverted',
    },
    {
      date: '25.06.2021',
      image: '/assets/img/cr-img/cr3.png',
      name: 'Code Review 3',
      tech: 'Bootstrap SCSS HTML JavaScript',
      description:
        'Using Bootstrapand SCSS, first JavaScript steps and getting familiar with the console',
      git: 'https://github.com/puoyan/FE21-CR03-Pouyan',
      leftPosition: '',
    },
    {
      date: '18.06.2021',
      image: '/assets/img/cr-img/cr2.png',
      name: 'Code Review 2',
      tech: 'HTML SCSS',
      description:
        'Getting familiar with the basic concepts of dynamic pages and SCSS',
      git: 'https://github.com/puoyan/FE21-CR02-Pouyan',
      leftPosition: 'timeline-inverted',
    },
    {
      date: '11.06.2021',
      image: '/assets/img/cr-img/cr1.png',
      name: 'Code Review 1',
      tech: 'HTML CSS',
      description: 'Getting familiar with the DOM HTML and CSS',
      git: 'https://github.com/puoyan/FE21-CR01-Pouyan',
      leftPosition: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
