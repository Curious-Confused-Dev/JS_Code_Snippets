import { Injectable } from '@angular/core';


@Injectable({
    providedIn : 'root' // Provides this service globally (no need to add in providers[])
})

export class UserService {
    private userName: string = '';

    constructor() {

    }

    setUser(name: string) {
        this.userName = name;
    }

    getUser(): string {
    return this.userName;
    }
}