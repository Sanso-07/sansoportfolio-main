import { Component } from '@angular/core';
import { HomeComponent } from '../../Menucontens/home/home.component';
import { ActivatedRoute } from '@angular/router';
import { AboutComponent } from '../../Menucontens/about/about.component';
import { SkillsComponent } from '../../Menucontens/skills/skills.component';
import { ContactComponent } from '../../Menucontens/contact/contact.component';
import { ExperienceComponent } from '../../Menucontens/experience/experience.component';
import { ProjectsectionComponent } from '../../Menucontens/projectsection/projectsection.component';

@Component({
  selector: 'app-masterview',
  standalone: true,
  imports: [HomeComponent,AboutComponent,SkillsComponent,ContactComponent,ExperienceComponent,ProjectsectionComponent],
  templateUrl: './masterview.component.html',
  styleUrl: './masterview.component.css'
})
export class MasterviewComponent {
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToElement(fragment);
      }
    });
  }

  private scrollToElement(elementId: string): void {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'instant', block: 'start', inline: 'nearest' });
      }
    }, 100);
  }
}
