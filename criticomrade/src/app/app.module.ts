import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './shared-components/logo/logo.component';
import { SearchBarComponent } from './shared-components/search-bar/search-bar.component';
import { ReviewButtonComponent } from './shared-components/review-button/review-button.component';
import { NavBarComponent } from './shared-components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LogoComponent, SearchBarComponent, ReviewButtonComponent, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
