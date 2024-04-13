import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from "./main/layout/header/header.component";
import { SidebarComponent } from './main/layout/sidebar/sidebar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent,SidebarComponent,MatCardModule]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  
  }
  title = 'shellbeco';
 

}
