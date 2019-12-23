import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { RandomCardComponent } from './components/random-card/random-card.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'cards', component: CardComponent },
  { path: 'random', component: RandomCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
