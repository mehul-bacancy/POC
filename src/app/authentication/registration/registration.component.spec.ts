import { of } from 'rxjs';
import { RegistrationComponent } from './registration.component';

describe("Register Component",()=>{
let component : RegistrationComponent;
let user;
let mockAuthService;
beforeEach(()=>{
user = [
{email:"bhunsadiya@gmail.com",password:"mehulm"}
]
mockAuthService = jasmine.createSpyObj(['register'])

component = new RegistrationComponent(mockAuthService)
})

describe('register',()=>{
it('should check the correct email in register ',()=>{
mockAuthService.register.and.returnValue(of(true))
component.user=user;
component.register();
expect(component.user[0].email).toEqual("bhunsadiya@gmail.com");
})

it('should check the correct password in register ',()=>{
mockAuthService.register.and.returnValue(of(true))
component.user=user;
component.register();
expect(component.user[0].password).toEqual("mehulm");
})

it('should call register',()=>{
mockAuthService.register.and.returnValue(of(true))
component.user=user;
component.register();
expect(mockAuthService.register).toHaveBeenCalled();

})



})
})


// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { RegisterComponent } from './register.component';

// describe('RegisterComponent', () => {
// let component: RegisterComponent;
// let fixture: ComponentFixture<RegisterComponent>;

// beforeEach(async(() => {
// TestBed.configureTestingModule({
// declarations: [ RegisterComponent ]
// })
// .compileComponents();
// }));

// beforeEach(() => {
// fixture = TestBed.createComponent(RegisterComponent);
// component = fixture.componentInstance;
// fixture.detectChanges();
// });

// it('should create', () => {
// expect(component).toBeTruthy();
// });
// });
//register spec ts