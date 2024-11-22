import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
 // Button text
 downloadButtonText = 'Download CV';

 // Section title and description
 sectionTitle = 'Experience';
 sectionDescription = 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites';

 // Experience entries
 experience1 = {
   year:'FEB 2022-OCT 2024',
   company: 'CKS Solutions, Nagercoil',
   title: 'Website Developer',
   description: 'Designed and coded new software or modified existing software to add new features. Developed mobile applications using Flutter, ensuring seamless performance across different platforms. Collaborated with cross-functional teams to ensure high-quality application development. Conducted testing and debugging to optimize mobile applications.'
 };

 experience2 = {
   year:'2023',
   company: 'CKS Solutions, Nagercoil',
   title: 'Intern, Full-Stack Development',
   description: 'Collaborated on design, development, and testing of web applications, integrating data from various back-end services to ensure seamless performance. Designed and implemented new features using Agile Scrum methodology, enhancing functionality and improving user experience across platforms.'
 };

 experience3 = {
   year:'2023',
   company: 'CKS Solutions, Nagercoil',
   title: 'FullStack Developer',
   description: 'Designed and coded new software or modified existing software to add new features. Developed mobile applications using Flutter, ensuring seamless performance across different platforms. Collaborated with cross-functional teams to ensure high-quality application development. Conducted testing and debugging to optimize mobile applications.'
 };

 experience4 = {
   year:'2022-2023',
   company: 'Beta Monks Technology Pvt Ltd, Chennai',
   title: 'Junior Software Developer',
   description: 'Skilled in user authentication, 3D Secure (E-Commerce) ACS applications, and OTP page design/customization. Experienced in bug detection, SQL database management, and web applications within the banking domain.'
 };
 downloadCV() {
   const link = document.createElement('a');
   link.setAttribute('target', '_blank');
   link.setAttribute('href', 'assets/Document/Sanso Sowmi_CV.pdf');
   link.setAttribute('download', 'SANSO SOWMI Resume.pdf');
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
 }
}
