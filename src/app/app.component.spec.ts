import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MessagesComponent } from './core/shared/messages/messages.component';

describe('AppComponent', () => {
  let fixture;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        MessagesComponent,
      ],
    }).compileComponents();
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;

  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Paradise Travel Co.'`, () => {
    expect(app.title).toEqual('Paradise Travel Co.');
  });

});
