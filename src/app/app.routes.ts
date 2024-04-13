import { Routes } from '@angular/router';
import { FormExampleComponent } from './main/components/form-example/form-example.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    {path: '', component: FormExampleComponent},
    {
         path: 'flights',
         loadComponent: () => loadRemoteModule('mfe1', './Component').then((m) => m.RequestGuarenteeComponent),
    }
        
] ;
