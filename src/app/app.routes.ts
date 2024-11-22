import { RouterModule, Routes } from '@angular/router';
import { MasterviewComponent } from './View/masterview/masterview.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './Menucontens/about/about.component';
import { SkillsComponent } from './Menucontens/skills/skills.component';
import { ContactComponent } from './Menucontens/contact/contact.component';
import { ExperienceComponent } from './Menucontens/experience/experience.component';
import { ProjectsectionComponent } from './Menucontens/projectsection/projectsection.component';

export const routes: Routes = [
    { path: '', component: MasterviewComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },  
    { path: 'skills', component: SkillsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'projects', component: ProjectsectionComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
