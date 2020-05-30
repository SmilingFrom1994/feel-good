import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeaturedComponent } from './featured/featured.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { QuoteComponent } from './quote/quote.component';
import { AddQuoteComponent } from './quote/add-quote/add-quote.component';

// import { RecipiesComponent } from './recipies/recipies.component';
// import { ReceipeListComponent } from './recipies/receipe-list/receipe-list.component';
// import { ReceipeDetailsComponent } from './recipies/receipe-details/receipe-details.component';
// import { ReceipeItemComponent } from './recipies/receipe-item/receipe-item.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturedComponent,
    FooterComponent,
    AboutUsComponent,
    QuoteComponent,
    AddQuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
