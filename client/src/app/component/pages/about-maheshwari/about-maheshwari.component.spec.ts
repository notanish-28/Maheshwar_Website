import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMaheshwariComponent } from './about-maheshwari.component';

describe('AboutMaheshwariComponent', () => {
  let component: AboutMaheshwariComponent;
  let fixture: ComponentFixture<AboutMaheshwariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMaheshwariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMaheshwariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
