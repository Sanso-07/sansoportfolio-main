import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  sectionTitle = 'Skills';
  sectionSubtitle = 'Building the Future, One Line at a Time.';
  
  skills = [
    { title: 'Bootstrap', description: 'Bootstrap is a front-end framework for creating responsive and mobile-friendly websites.', image: '../../../assets/image/techimage/Bootstraplogo.png' },
    { title: 'Angular', description: 'Angular is a popular open-source web application framework developed by Google.', image: '../../../assets/image/techimage/Angularlogo.png' },
    { title: 'ASP.NET Core', description: 'ASP.NET Core is a cross-platform framework for building modern web applications and services.', image: '../../../assets/image/techimage/Asp.netlogo.png' },
    { title: 'SQL', description: 'SQL is a standard language used for managing and querying relational databases.', image: '../../../assets/image/techimage/sqllogo.png' }
  ];
}