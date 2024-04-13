import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
 
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatListModule,MatIconModule,CommonModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {
  sidenavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sidenavCollapsed.set(val);
  }
  menuItems = signal<MenuItem[]>([
    {
      icon: 'analytics', label: 'Dashboard', route: ''
    }
  ]);
  profilePicSize = computed(() => this.sidenavCollapsed() ? '32' : ' 70');
}
