import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundocomponenteComponent } from './segundocomponente.component';

describe('SegundocomponenteComponent', () => {
  let component: SegundocomponenteComponent;
  let fixture: ComponentFixture<SegundocomponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundocomponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundocomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
