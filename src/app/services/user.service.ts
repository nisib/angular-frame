import { Injectable } from "@angular/core";
import { UserApi } from 'src/fw/users/user.api';
import { Observable, of, throwError } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class UserService implements UserApi {
    isAuthenticated = true;

    constructor(private router: Router) {}
    
    signIn(username: string, password: string, rememberMe: boolean) : Observable<any> {
        console.log('UserService.signIn: ' + username + ' '+password+' '+rememberMe);
        this.isAuthenticated = true;
        return of({}).pipe(delay(2000));
      //  return of({}).pipe(delay(2000)).pipe(flatMap(x=>throwError('Invalid User Name and/or Password')));
    }

    signOut(): Observable<any> {
        this.isAuthenticated=false;
        this.router.navigate(['/signin']);
        return of({});
    }
}