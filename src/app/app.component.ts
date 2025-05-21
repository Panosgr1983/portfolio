import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isMenuOpen = false;
  currentSlide = 0;
  activeSection = 'home';

  @ViewChild('heroSection') heroSection!: ElementRef;
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('servicesSection') servicesSection!: ElementRef;
  @ViewChild('portfolioSection') portfolioSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

  slides = [
    "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=2000&q=80",
  ];

  services = [
    {
      icon: 'code',
      title: "Web Design & Ανάπτυξη",
      description: "Custom σχεδιασμός, responsive design, e-shop development και SEO best practices.",
      details: [
        "Custom Σχεδιασμός",
        "Responsive Design",
        "E-Shop Development",
        "SEO Best Practices"
      ]
    },
    {
      icon: 'pen-tool',
      title: "Branding & Στρατηγική",
      description: "Ολοκληρωμένες λύσεις branding και στρατηγικής για την επιχείρησή σας.",
      details: [
        "Brand Identity",
        "Εταιρική Εικόνα & Guidelines",
        "Brand Positioning"
      ]
    },
    {
      icon: 'bar-chart',
      title: "Digital Marketing",
      description: "Στοχευμένες στρατηγικές digital marketing για αύξηση της online παρουσίας σας.",
      details: [
        "SEO & Content Strategy",
        "Google Ads & Meta Ads",
        "Social Media Management",
        "Email Marketing & CRM"
      ]
    }
  ];

  portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=800&q=80",
      title: "E-shop Ειδών Ένδυσης",
      category: "E-commerce Development",
      description: "Δημιουργία e-shop για εταιρεία ειδών ένδυσης με στόχο την αύξηση των online πωλήσεων"
    },
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      title: "Real Estate Platform",
      category: "Web Development",
      description: "Σχεδιασμός και ανάπτυξη site για real estate με προηγμένα φίλτρα αναζήτησης ακινήτων"
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      title: "Ιατρικό Portal",
      category: "Healthcare",
      description: "Ολική αναβάθμιση ιστοσελίδας ιατρείου με online booking και πιο σύγχρονο brand identity"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      title: "Εφαρμογή Delivery",
      category: "Mobile App",
      description: "Σχεδιασμός και ανάπτυξη εφαρμογής για παραγγελίες φαγητού με σύστημα loyalty"
    }
  ];

  ngOnInit() {
    // Set up slider interval
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000);

    // Set up scroll observer
    fromEvent(window, 'scroll')
      .pipe(debounceTime(50))
      .subscribe(() => this.checkActiveSection());
  }

  checkActiveSection() {
    const scrollPosition = window.scrollY + 100;
    const sections = [
      { id: 'home', ref: this.heroSection },
      { id: 'about', ref: this.aboutSection },
      { id: 'services', ref: this.servicesSection },
      { id: 'portfolio', ref: this.portfolioSection },
      { id: 'contact', ref: this.contactSection }
    ];

    for (const section of sections) {
      if (section.ref) {
        const element = section.ref.nativeElement;
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section.id;
          break;
        }
      }
    }
  }

  scrollToSection(sectionRef: ElementRef) {
    this.isMenuOpen = false;
    sectionRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}