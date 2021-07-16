import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { CoverComponent } from './components/cover/cover.component';
import { PurpleSectionComponent } from './components/purple-section/purple-section.component';
import { SectionComponent } from './components/section/section.component';
import { SkillContainerComponent } from './components/skill-container/skill-container.component';
import { WorkHistorySectionComponent } from './components/work-history-section/work-history-section.component';
import { ProjCardComponent } from './components/proj-card/proj-card.component';
import { ProjListComponent } from './components/proj-list/proj-list.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterProjectComponent } from './components/footer-project/footer-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    CoverComponent,
    PurpleSectionComponent,
    SectionComponent,
    SkillContainerComponent,
    WorkHistorySectionComponent,
    ProjCardComponent,
    ProjListComponent,
    TestimonialsComponent,
    TestimonialComponent,
    ToggleComponent,
    FooterComponent,
    FooterProjectComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
