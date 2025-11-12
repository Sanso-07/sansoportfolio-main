import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projectsection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projectsection.component.html',
  styleUrl: './projectsection.component.css'
})
export class ProjectsectionComponent {
  headerTitle: string = "Our Projects";
  headerSubtitle: string = "Empowering Innovation,Inspiring Futures,Together I have Achieve More.";
  
  // Data for the project cards
  projects = [
    {
      icon: 'bi bi-eyeglasses',
      title: 'CKS SITE',
      description: 'A dynamic job portal that connects job seekers with employers, enabling users to search and apply for jobs while allowing employers to find suitable candidates. The platform streamlines the hiring process with advanced filters for location, industry, and job type, enhancing the efficiency of job searches and recruitment.',
      link: 'https://cks.ckssolutions.co.in/' 
    },
    {
      icon: 'bi bi-eyeglasses',
      title: 'CAREERIN',
      description: 'An intuitive course purchase platform that allows users to browse, purchase, and access online courses across various subjects. The website provides detailed course information and pricing, enabling users to instantly access learning materials upon purchase, streamlining the learning experience.',
      link: 'https://careerin.co.in/'
    },
    {
      icon: 'bi bi-eyeglasses',
      title: 'EXAMPORTAL',
      description: 'A robust online exam portal with features for exam setup, management, and seamless integration of institution onboarding. Built a comprehensive question database and implemented advanced security measures to safeguard the platform. The portal offers an efficient environment for conducting exams and generating results, enhancing the overall experience for candidates.',
      link: 'https://examportal-careerin.ckssolutions.co.in/login' 
    },
    {
      icon: 'bi bi-eyeglasses',
      title: 'NYRV',
      description: 'A robust online exam portal with features for exam setup, management, and seamless integration of institution onboarding. Built a comprehensive question database and implemented advanced security measures to safeguard the platform. The portal offers an efficient environment for conducting exams and generating results, enhancing the overall experience for candidates.',
      link: 'https://nyrv.co/' 
    },
  ];
}
