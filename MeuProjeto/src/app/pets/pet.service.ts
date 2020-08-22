import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from './pet';
import { Observable } from 'rxjs';

@Injectable()
export class PetService {
    constructor(private http: HttpClient) { }

    protected UrlServiceV1: string = 'http://localhost:3000/';

    obterPet(): Observable<Pet[]> {
        return this.http.get<Pet[]>(this.UrlServiceV1 + "pets");
    }
}