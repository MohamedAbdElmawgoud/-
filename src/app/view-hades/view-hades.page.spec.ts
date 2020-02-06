import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewHadesPage } from './view-hades.page';

describe('ViewHadesPage', () => {
  let component: ViewHadesPage;
  let fixture: ComponentFixture<ViewHadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewHadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
