import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CoverComponent } from './shared/components/cover/cover.component';
import { FooterProjectComponent } from './shared/components/footer-project/footer-project.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ProjListComponent } from './shared/components/proj-list/proj-list.component';
import { PurpleSectionComponent } from './shared/components/purple-section/purple-section.component';
import { SectionComponent } from './shared/components/section/section.component';
import { SkillContainerComponent } from './shared/components/skill-container/skill-container.component';
import { TestimonialComponent } from './shared/components/testimonial/testimonial.component';
import { TestimonialsComponent } from './shared/components/testimonials/testimonials.component';
import { ToggleComponent } from './shared/components/toggle/toggle.component';
import { WorkHistorySectionComponent } from './shared/components/work-history-section/work-history-section.component';
import { ProjectEffects } from './shared/store/effects/project.effect';
import { projectReducer } from './shared/store/reducers/project.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    PurpleSectionComponent,
    SectionComponent,
    SkillContainerComponent,
    WorkHistorySectionComponent,
    ProjListComponent,
    TestimonialsComponent,
    TestimonialComponent,
    ToggleComponent,
    FooterComponent,
    FooterProjectComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    StoreModule.forRoot({projects: projectReducer}, {}),
    EffectsModule.forRoot([ProjectEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
