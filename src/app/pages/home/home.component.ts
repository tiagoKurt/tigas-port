import { Component, OnInit, AfterViewInit, OnDestroy, signal, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../core/components/header/header.component';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { ScrollService } from '../../core/services/scroll.service';
import gsap from 'gsap';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  role: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  current: boolean;
  details: string[];
  techs: string[];
}

interface TechItem {
  name: string;
  icon: string;
  level: number;
}

interface Differential {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  // Typing effect
  typingText = signal('');
  private fullText = 'Engenheiro de Software';
  private typingIndex = 0;
  private typingInterval: any;

  // Stats
  stats = [
    { value: '3+', label: 'Anos de experiência' },
    { value: '5+', label: 'Sistemas em produção' },
    { value: '15+', label: 'Stacks dominadas' },
  ];

  // Highlights
  highlights = [
    { icon: 'target', title: 'Foco em Resultado', desc: 'Sistemas em produção utilizados diariamente por órgãos governamentais.' },
    { icon: 'architecture', title: 'Arquitetura Moderna', desc: 'APIs REST, microsserviços, autenticação JWT, Docker e deploy automatizado.' },
    { icon: 'evolution', title: 'Evolução Constante', desc: 'Do trainee ao desenvolvedor pleno em menos de 2 anos de carreira.' },
    { icon: 'leadership', title: 'Liderança Técnica', desc: 'Refatoração de legado, mentoria de boas práticas e documentação técnica.' }
  ];

  // Experiences
  experiences: Experience[] = [
    {
      company: 'G4F',
      role: 'Desenvolvedor Full Stack',
      period: 'Março 2025 — Atual',
      current: true,
      details: [
        'Desenvolvimento e evolução de sistemas institucionais estaduais na CGE-GO',
        'Sistemas utilizados em larga escala: IRIS e SISPAC',
        'Arquitetura de APIs REST escaláveis com Laravel',
        'Frontend moderno com Angular e TypeScript',
        'Refatoração de código legado aplicando Clean Code e SOLID',
        'Otimização de performance e escalabilidade de sistemas críticos',
        'Integrações entre múltiplos sistemas governamentais',
      ],
      techs: ['Angular', 'Laravel', 'TypeScript', 'REST API', 'PostgreSQL'],
    },
    {
      company: 'Controladoria-Geral do Estado de Goiás',
      role: 'Desenvolvedor PHP + Angular',
      period: 'Setembro 2023 — Março 2025',
      current: false,
      details: [
        'Sistema de gestão de riscos institucionais (IRIS)',
        'Desenvolvimento Full Stack com Laravel e Angular',
        'Implementação de autenticação JWT e políticas de segurança',
        'Arquitetura desacoplada com Docker e API REST',
        'Design system customizado com TailwindCSS',
        'Foco em performance, manutenibilidade e escalabilidade',
      ],
      techs: ['Laravel', 'Angular', 'TailwindCSS', 'JWT', 'Docker', 'MySQL'],
    },
    {
      company: 'Upfinance',
      role: 'Information Technology Trainee',
      period: 'Junho 2023 — Setembro 2023',
      current: false,
      details: [
        'Introdução ao desenvolvimento profissional de software',
        'Aprendizado de boas práticas e metodologias ágeis',
        'Participação em projetos de tecnologia financeira',
      ],
      techs: ['JavaScript', 'HTML', 'CSS'],
    },
  ];

  // Tech stack
  techStack: { category: string; items: TechItem[] }[] = [
    {
      category: 'Frontend',
      items: [
        { name: 'Angular', icon: 'assets/images/icons/logos--angular-icon.svg', level: 95 },
        { name: 'TypeScript', icon: 'assets/images/icons/logos--typescript-icon.svg', level: 90 },
        { name: 'TailwindCSS', icon: 'assets/images/icons/logos--tailwindcss-icon.svg', level: 90 },
        { name: 'HTML5/CSS3', icon: 'assets/images/icons/logos--html-5.svg', level: 95 },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Laravel', icon: 'assets/images/icons/logos--laravel.svg', level: 92 },
        { name: 'PHP', icon: 'assets/images/icons/logos--php.svg', level: 90 },
        { name: 'Java', icon: 'assets/images/icons/logos--java.svg', level: 75 },
        { name: 'Spring Boot', icon: 'assets/images/icons/logos--spring-icon.svg', level: 70 },
      ],
    },
    {
      category: 'DevOps & Tools',
      items: [
        { name: 'Docker', icon: 'assets/images/icons/logos--docker-icon.svg', level: 80 },
        { name: 'Git', icon: 'assets/images/icons/logos--git-icon.svg', level: 90 },
        { name: 'MySQL', icon: 'assets/images/icons/logos--mysql.svg', level: 85 },
        { name: 'REST APIs', icon: 'assets/images/icons/logos--nodejs-icon.svg', level: 95 },
        { name: 'JWT', icon: 'assets/images/icons/logos--jwt-icon.svg', level: 85 },
      ],
    },
  ];

  // Projects
  projects: Project[] = [
    {
      title: 'IRIS — Gestão de Riscos',
      description:
        'Sistema de gestão e análise de riscos institucionais para a CGE-GO. Desenvolvimento completo do front e back-end, incluindo diagrama Bowtie interativo para mapeamento visual de riscos. Módulos de avaliação, mitigação e monitoramento com total transparência e governança.',
      image: 'assets/images/iris.png',
      link: 'https://www.irishomolog.controladoria.go.gov.br/sign-in',
      technologies: ['Angular', 'TypeScript', 'Laravel', 'REST API', 'PostgreSQL'],
      role: 'Full Stack Developer',
    },
    {
      title: 'SISPAC — Sistema Corporativo',
      description:
        'Sistema corporativo do Governo de Goiás para gestão documental e administrativa. Controle de processos e comunicações internas entre órgãos públicos. Modernização de módulos e telas com foco em usabilidade e performance.',
      image: 'assets/images/sispac.png',
      link: 'https://wwwhomolog.correicao.go.gov.br/',
      technologies: ['Angular', 'Laravel', 'MySQL', 'Bootstrap'],
      role: 'Full Stack Developer',
    },
  ];

  // Differentials
  differentials: Differential[] = [
    {
      icon: 'government',
      title: 'Sistemas Governamentais',
      description: 'Experiência sólida em sistemas críticos para órgãos estaduais com milhares de usuários.',
    },
    {
      icon: 'structure',
      title: 'Arquitetura Escalável',
      description: 'Design de sistemas desacoplados, escaláveis e resilientes com padrões modernos.',
    },
    {
      icon: 'integration',
      title: 'Integração de Sistemas',
      description: 'Expertise em conectar múltiplos sistemas através de APIs REST robustas e seguras.',
    },
    {
      icon: 'performance',
      title: 'Performance',
      description: 'Otimização contínua de queries, caching e renderização para máxima velocidade.',
    },
    {
      icon: 'security',
      title: 'Segurança',
      description: 'Implementação de JWT, policies, middlewares e boas práticas de segurança.',
    },
    {
      icon: 'clean-code',
      title: 'Clean Code & SOLID',
      description: 'Código limpo, testável e manutenível seguindo princípios de engenharia de software.',
    },
  ];

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.startTyping();
  }

  ngAfterViewInit(): void {
    this.initScrollAnimations();
    this.initGsapAnimations();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  private startTyping(): void {
    this.typingInterval = setInterval(() => {
      if (this.typingIndex < this.fullText.length) {
        this.typingText.update(t => t + this.fullText[this.typingIndex]);
        this.typingIndex++;
      } else {
        clearInterval(this.typingInterval);
      }
    }, 60);
  }

  private initScrollAnimations(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach((el) => {
      this.observer.observe(el);
    });
  }

  private initGsapAnimations(): void {
    // Hero entrance
    gsap.fromTo('.hero-content', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
    gsap.fromTo('.hero-photo', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 });
    gsap.fromTo('.hero-stats > *', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.15, delay: 0.8 });
  }

  scrollToSection(id: string): void {
    this.scrollService.scrollToSection(id);
  }
}
