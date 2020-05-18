import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GenreComponent } from './genre/genre.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';




const routes: Routes = [
//  {path: 'Home',redirectTo:'/Home',pathMatch:'full'},
{ path: 'Home', component:HomeComponent},
{path: 'Genres', component: GenreComponent},
{path: 'About-Us',component: AboutComponent},
{path: 'Testimonials', component: TestimonialComponent},
{path: 'Contact-Us',component:ContactComponent},

];
/**
 * @author Astha Sharma
 *
 * 
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,GenreComponent,AboutComponent,TestimonialComponent,ContactComponent]