import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="border-t border-surface-800/50 py-12 bg-surface-950">
      <div class="section-container">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-3">
            <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-surface-950 font-bold text-xs">
              TM
            </div>
            <span class="text-surface-500 text-sm">
              &copy; {{ currentYear }} Tiago Marques
            </span>
          </div>

          <div class="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/tiago-marques-1a4105254" target="_blank" rel="noopener noreferrer"
               class="text-surface-500 hover:text-amber-400 transition-colors duration-300 text-sm">
              LinkedIn
            </a>
            <a href="https://github.com/tiagoKurt" target="_blank" rel="noopener noreferrer"
               class="text-surface-500 hover:text-amber-400 transition-colors duration-300 text-sm">
              GitHub
            </a>
            <a href="mailto:lezzadogamer@gmail.com"
               class="text-surface-500 hover:text-amber-400 transition-colors duration-300 text-sm">
              Email
            </a>
          </div>

          <p class="text-surface-600 text-xs">
            
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [`:host { display: block; }`]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
