import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../services/users/users.service';

export const authGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    const id = Number(route.paramMap.get('id'));
    const usersService = inject(UsersService);
    const router = inject(Router);

    const isAuthenticated = usersService.isUserAuthenticated(id);
    if (!isAuthenticated) {
        router.navigate(['log-in']);
    }
    return isAuthenticated;
};