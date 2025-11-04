import { Component } from '@angular/core';
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { SamplesSectionComponent } from "./components/samples-section/samples-section.component";

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, SamplesSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
