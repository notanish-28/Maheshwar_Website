import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutArtisansComponent } from './about-artisans.component';

describe('AboutArtisansComponent', () => {
  let component: AboutArtisansComponent;
  let fixture: ComponentFixture<AboutArtisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutArtisansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
