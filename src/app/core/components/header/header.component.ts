import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mobileMenuOpen = false;

  menuItems = [
    { label: 'Início', sectionId: 'home' },
    { label: 'Perfil', sectionId: 'profile' },
    { label: 'Tecnologias', sectionId: 'technologies' },
    { label: 'Projetos', sectionId: 'projects' },
    { label: 'Formação', sectionId: 'education' },
    { label: 'Contato', sectionId: 'contact' }
  ];

  constructor(private scrollService: ScrollService) {}

  scrollTo(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
