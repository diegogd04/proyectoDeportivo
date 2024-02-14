import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidosMenuComponent } from './partidos-menu.component';

describe('PartidosMenuComponent', () => {
  let component: PartidosMenuComponent;
  let fixture: ComponentFixture<PartidosMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartidosMenuComponent]
    });
    fixture = TestBed.createComponent(PartidosMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
