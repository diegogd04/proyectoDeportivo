import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidosDetailComponent } from './partidos-detail.component';

describe('PartidosDetailComponent', () => {
  let component: PartidosDetailComponent;
  let fixture: ComponentFixture<PartidosDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartidosDetailComponent]
    });
    fixture = TestBed.createComponent(PartidosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
