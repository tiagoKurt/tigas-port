import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../core/components/header/header.component';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { ScrollService } from '../../core/services/scroll.service';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  projects: Project[] = [
    {
      title: 'IRIS (Gestão de Risco)',
      description:
        'Sistema desenvolvido para a Controladoria-Geral do Estado de Goiás (CGE) voltado à gestão e análise de riscos institucionais. No projeto, fui responsável pelo front e back-end completo, incluindo a criação de um diagrama Bowtie interativo, utilizado para mapear e visualizar riscos. O sistema integra módulos de avaliação, mitigação e monitoramento de riscos, proporcionando mais transparência e governança.',
      image: 'assets/images/iris.png',
      link: 'https://www.iris.controladoria.go.gov.br/sign-in',
      technologies: ['Angular', 'TypeScript', 'Laravel', 'REST API', 'PostgreSQL'],
    },
    {
      title: 'SISPAC',
      description:
        'O SISPAC é um sistema corporativo do Governo de Goiás voltado à gestão documental e administrativa, permitindo o controle de processos e comunicações internas entre órgãos públicos. Participei na modernização de módulos e telas, otimizando a usabilidade e o desempenho do sistema.',
      image: 'assets/images/sispac.png',
      link: 'https://www.sispac.go.gov.br/',
      technologies: ['Angular', 'Laravel', 'MySQL', 'Bootstrap'],
    },
  ];

  technologies = {
    frontend: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'TailwindCSS'],
    backend: ['PHP (Laravel)', 'Java (Spring Boot)', 'Node.js'],
    database: ['MySQL', 'PostgreSQL', 'MariaDB'],
    devops: ['Git', 'GitHub', 'Vercel', 'Docker', 'Linux'],
    others: ['PrimeNG', 'Bootstrap', 'REST APIs', 'Excel Automation'],
  };

  constructor(private scrollService: ScrollService) {}

  scrollToProjects(): void {
    this.scrollService.scrollToSection('projects');
  }

  scrollToContact(): void {
    this.scrollService.scrollToSection('contact');
  }

  getTotalTechnologies(): number {
    return Object.values(this.technologies).reduce((total, techArray) => total + techArray.length, 0);
  }
}
