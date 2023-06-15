import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';

export const authGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    const id = Number(route.paramMap.get('id'));
    const authService = inject(AuthService);
    const router = inject(Router);

    const isAuthenticated = authService.isUserAuthenticated(id);
    if (!isAuthenticated) {
        router.navigate(['log-in']);
    }
    
    return isAuthenticated;
};