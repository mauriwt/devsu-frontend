import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BpBotonComponent } from "./bp-boton.component";

describe('BpBotonComponent', () => {
  let component: BpBotonComponent;
  let fixture: ComponentFixture<BpBotonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BpBotonComponent],
      providers: [],
      imports: []
    });
    fixture = TestBed.createComponent(BpBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia tener una variable "clases" con valor "buttonMenu"', () => {
    expect(component.clases).toBeTruthy();
    expect(component.clases).toEqual('buttonMenu');
  });

  it('deberia tener una variable "buttonText" vacia', () => {
    expect(component.buttonText).toEqual('');
  });

  it('deberia tener una variable "buttonText" con valor "button"', () => {
    expect(component.type).toEqual('button');
  });

  it('deberia tener una variable "btnClick"', () => {
    expect(component.btnClick).toBeTruthy();
  });

  it('deberia tener una función "onClick()"', () => {
    expect(component.onClick).toBeTruthy();
  });
});
