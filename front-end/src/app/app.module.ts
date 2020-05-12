import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { TimeDisplayComponent } from './section/time-display/time-display.component';
import { ButtonsComponent } from './section/buttons/buttons.component';

@NgModule({
  declarations: [ // 컴포넌트
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    TimeDisplayComponent,
    ButtonsComponent
  ],
  imports: [  // 다른 모듈들
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // view가 없는 컴포넌트가 아닌 서비스 로직
  bootstrap: [AppComponent] // 처음 실행할 컴포넌트 지정
})
export class AppModule { }
