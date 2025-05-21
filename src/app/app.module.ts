import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LucideAngularModule, Menu, X, Code, PenTool, BarChart, ChevronRight, Mail, Instagram, Linkedin, Phone, MapPin, FileText, User, Briefcase, ExternalLink, ArrowRight, Send } from 'lucide-angular';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ServiceCardComponent,
    PortfolioItemComponent,
    TestimonialsSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    LucideAngularModule.pick({
      Menu, X, Code, PenTool, BarChart, ChevronRight, Mail, 
      Instagram, Linkedin, Phone, MapPin, FileText, User, 
      Briefcase, ExternalLink, ArrowRight, Send
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }