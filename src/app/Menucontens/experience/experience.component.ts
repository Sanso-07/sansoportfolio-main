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
 sectionDescription = 'Bringing Over a Year Of Experience Across Multiple Projects, I Have Suceessfully Contributed to Developing and Optimizing Solutions that drive Results.';

 // Experience entries
 experience1 = {
   year:'NOV 2022-OCT 2024',
   company: 'CKS Solutions, Nagercoil',
   title: 'Junior Software Developer',
   description: 'Specializes in crafting dynamic and user-friendly web pages that elevate the digital experience. Expertise includes developing frontend applications using Angular and optimizing APIs with .NET and Entity Framework to deliver seamless backend solutions. Focuses on enhancing existing software with new features and collaborating with cross-functional teams to ensure high-quality, efficient applications. Passionate about problem-solving, with a strong emphasis on rigorous testing and debugging to ensure robust and reliable results.'
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
   description: 'Designed and coded new software or modified existing software to add new features. Developed mobile applications, ensuring seamless performance across different platforms. Collaborated with cross-functional teams to ensure high-quality application development. Conducted testing and debugging to optimize mobile applications.'
 };

 experience4 = {
   year:'OCT 2021-SEP 2022',
   company: 'Beta Monks Technology Pvt Ltd, Chennai',
   title: 'Junior Software Developer',
   description: 'Proficient in managing user authentication and 3D Secure (E-Commerce) applications, with hands-on expertise in designing and customizing OTP pages. Experienced in identifying and resolving bugs, managing SQL databases, and optimizing web applications within the banking domain. Demonstrated ability to deliver reliable solutions that enhance system performance and user experience.'
 };

 experience5 = {
  year:'FEB 2025-PRESENT',
  company: 'NYRV, Dubai',
  title: 'Web Developer',
  description: 'I developed and managed the complete Shopify websites for NYRV and Moheat, handling everything from design to deployment. I ensured all product images have a consistent look, optimized content and meta data for better search visibility, and maintained a trendy, professional brand presentation. I also improved user experience with a clean, easy-to-navigate interface.'
};
 downloadCV() {
   const link = document.createElement('a');
   link.setAttribute('target', '_blank');
   link.setAttribute('href', 'assets/Document/Sanso cv.pdf');
   link.setAttribute('download', 'SANSO SOWMI Resume.pdf');
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
 }
}
