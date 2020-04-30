import { LoginComponent } from "./login.component";
import { of } from 'rxjs';

describe("LoginComponent",()=>{
let component : LoginComponent;
let user;
let mockAuthService;
beforeEach(()=>{
user = [
{email:"bhunsadiya@gmail.com",password:"mehulm"}
]
mockAuthService = jasmine.createSpyObj(['login'])

component = new LoginComponent(mockAuthService)
})

describe('login',()=>{
it('should check the correct email in login ',()=>{
mockAuthService.login.and.returnValue(of(true))
component.user=user;
component.login();
expect(component.user[0].email).toEqual("bhunsadiya@gmail.com");
})

it('should check the correct password in login ',()=>{
mockAuthService.login.and.returnValue(of(true))
component.user=user;
component.login();
expect(component.user[0].password).toEqual("mehulm");
})

it('should call login ',()=>{
mockAuthService.login.and.returnValue(of(true))
component.user=user;
component.login();
expect(mockAuthService.login).toHaveBeenCalled();

})



})
})





// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
// let component: LoginComponent;
// let fixture: ComponentFixture<LoginComponent>;

// beforeEach(async(() => {
// TestBed.configureTestingModule({
// declarations: [ LoginComponent ]
// })
// .compileComponents();
// }));

// beforeEach(() => {
// fixture = TestBed.createComponent(LoginComponent);
// component = fixture.componentInstance;
// fixture.detectChanges();
// });

// it('should create', () => {
// expect(component).toBeTruthy();
// });
// });
//login spec