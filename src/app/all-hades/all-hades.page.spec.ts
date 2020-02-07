import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllHadesPage } from './all-hades.page';

describe('AllHadesPage', () => {
  let component: AllHadesPage;
  let fixture: ComponentFixture<AllHadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllHadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllHadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
