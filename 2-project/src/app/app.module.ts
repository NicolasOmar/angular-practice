import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
// MODULES
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { RecipesModule } from './recipes/recipes.module';
import { ProductsModule } from './products/products.module';
// CORE COMPONENTS
import { AppComponent } from './core/app/app.component';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    RecipesModule,
    ProductsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
