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
      description: 'A job portal connects job seekers with employers by allowing users to search and apply for jobs and find candidates. It streamlines the job search and hiring process with filters for location, industry, and job type.',
      link: 'https://cks.ckssolutions.co.in/' 
    },
    {
      icon: 'bi bi-eyeglasses',
      title: 'CAREERIN',
      description: 'A course purchase website lets users browse, buy, and access online courses in various subjects. It provides course details and pricing, giving users instant access to learning materials after purchase.',
      link: 'https://careerin.co.in/'
    },
    {
      icon: 'bi bi-eyeglasses',
      title: 'EXAMPORTAL',
      description: 'Developed an advanced online exam portal featuring exam setup and management functionality.implemeted instituation onboarding,question database maintenance,and security enhancements for the portal.',
      link: 'https://examportal-careerin.ckssolutions.co.in/login' 
    },
    // Add more projects as needed
  ];
}
