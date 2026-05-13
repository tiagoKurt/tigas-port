import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Experiência', id: 'experience' },
    { label: 'Stack', id: 'stack' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Contato', id: 'contact' },
  ];

  constructor(private scrollService: ScrollService) {}

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  scrollTo(id: string): void {
    this.scrollService.scrollToSection(id);
    this.isMobileMenuOpen.set(false);
  }

  toggleMobile(): void {
    this.isMobileMenuOpen.update(v => !v);
  }
}
