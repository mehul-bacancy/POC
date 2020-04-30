import { TestBed, inject } from "@angular/core/testing";
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from '../../../src/app/services/authentication.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';


describe('auth service', () => {
    let RouterStub;
    let user;
    const authStub: any = {
        authState: {},
        auth: {
            currentUser: {
                uid: "nirali"
            },
            signInWithEmailAndPassword() {
                return Promise.resolve();
            },
            createUserWithEmailAndPassword() {
                return Promise.resolve();
            },
            sendPasswordResetEmail() {
                return Promise.resolve();
            }

        }
    };

    beforeEach(() => {
        let store = {};
        let mockLocalStorage = {
            getItem: (key: string): string => {
                return key in store ? store[key] : null;
            },
            setItem: (key: string, value: string) => {
                store[key] = `${value}`;
            }

        };


        class RouterStub {
            navigateByUrl(url: string) { return url; }
        }

        user = { email: "bhunsadiya@gmail.com", password: "mehulm" }

        TestBed.configureTestingModule({

            providers: [
                { provide: AngularFireAuth, useValue: authStub },
                { provide: AngularFireDatabase },
                { provide: Router, useClass: RouterStub },
                { provide: localStorage, useValue: mockLocalStorage },
                AuthenticationService
            ]
        });
        authStub.authState = of(null);


    });

    it('should call signInWithPasswordAndEmail', inject([AuthenticationService, Router], (service: AuthenticationService, router: Router) => {

        const mock = TestBed.get(AngularFireAuth);
        const spy = spyOn(authStub.auth, 'signInWithEmailAndPassword').and.callThrough();

        //const navArgs = spyr.calls.first().args[0];
        mock.auth = authStub.auth;

        service.login(user.email, user.password);
        localStorage.setItem("uid", mock.auth.currentUser.uid);

        expect(spy).toHaveBeenCalledWith(user.email, user.password);

        //expect(router.navigate).toHaveBeenCalled();
        // expect(spyOn(router,'navigateByUrl').and.callThrough()).toHaveBeenCalledWith('/dashboard');

    }));

    it('should call createUserWithEmailAndPassword', inject([AuthenticationService, Router], (service: AuthenticationService, router: Router) => {

        const mock = TestBed.get(AngularFireAuth);
        const spy = spyOn(authStub.auth, 'createUserWithEmailAndPassword').and.callThrough();

        //const navArgs = spyr.calls.first().args[0];
        mock.auth = authStub.auth;

        service.register(user.email, user.password);
        //localStorage.setItem("uid",mock.auth.currentUser.uid);

        expect(spy).toHaveBeenCalledWith(user.email, user.password);

        //expect(router.navigate).toHaveBeenCalled();
        // expect(spyOn(router,'navigateByUrl').and.callThrough()).toHaveBeenCalledWith('/dashboard');

    }));

    it('should call forgetpassword', inject([AuthenticationService, Router], (service: AuthenticationService, router: Router) => {

        const mock = TestBed.get(AngularFireAuth);
        const spy = spyOn(authStub.auth, 'sendPasswordResetEmail').and.callThrough();

        //const navArgs = spyr.calls.first().args[0];
        mock.auth = authStub.auth;

        service.forgetPassword(user.email);
        //localStorage.setItem("uid",mock.auth.currentUser.uid);

        expect(spy).toHaveBeenCalledWith(user.email);

        //expect(router.navigate).toHaveBeenCalled();
        // expect(spyOn(router,'navigateByUrl').and.callThrough()).toHaveBeenCalledWith('/dashboard');

    }));


})//auth spec