import { Component, computed, signal } from '@angular/core';
import { MatSidenavModule,MatSidenavContainer} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
 
import { CustomSidenavComponent } from './custom-sidenav/custom-sidenav.component';
 
@Component({
  selector: 'app-sidebar',
  standalone: true,
  providers:[MatSidenavContainer],
  imports: [  MatSidenavModule,
              MatToolbarModule,
              MatIconModule,
              CustomSidenavComponent,
              MatButtonModule,              
            ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  collapsed = signal(false);
  sidenavwidth = computed(() => this.collapsed() ? '62px' : '280px');
}




