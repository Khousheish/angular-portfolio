import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { CoverComponent } from './shared/components/cover/cover.component';
import { FooterProjectComponent } from './shared/components/footer-project/footer-project.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ProjCardComponent } from './shared/components/proj-card/proj-card.component';
import { ProjListComponent } from './shared/components/proj-list/proj-list.component';
import { PurpleSectionComponent } from './shared/components/purple-section/purple-section.component';
import { SectionComponent } from './shared/components/section/section.component';
import { SkillContainerComponent } from './shared/components/skill-container/skill-container.component';
import { TestimonialComponent } from './shared/components/testimonial/testimonial.component';
import { TestimonialsComponent } from './shared/components/testimonials/testimonials.component';
import { ToggleComponent } from './shared/components/toggle/toggle.component';
import { WorkHistorySectionComponent } from './shared/components/work-history-section/work-history-section.component';

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
