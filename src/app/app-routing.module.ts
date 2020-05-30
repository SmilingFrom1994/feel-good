import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FeaturedComponent } from './featured/featured.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { QuoteComponent } from './quote/quote.component';
import { AddQuoteComponent } from './quote/add-quote/add-quote.component'

const routes : Routes = [
    { path: '', component: FeaturedComponent },
    { path: 'featured-quote', component: FeaturedComponent },
    { path: 'about-us', component: AboutUsComponent},
    { path: 'quotes/:cat_id', component: QuoteComponent},
    { path: 'quote/new-quote', component: AddQuoteComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule { } 
// export const routingComponents = [HomeComponent]