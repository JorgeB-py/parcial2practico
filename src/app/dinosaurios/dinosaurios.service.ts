import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dinosaurio } from './dinosaurio';
import { DinosaurioDetail } from './dinosaurios-detail/dinosaurio-detail';

@Injectable({
  providedIn: 'root'
})
export class DinosauriosService {
  private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { 
}
  getDinosaurios(): Observable<DinosaurioDetail[]>{
    return this.http.get<DinosaurioDetail[]>(this.apiUrl);
  }
  getDinosaurio(id:string): Observable<DinosaurioDetail>{
    return this.http.get<DinosaurioDetail>(this.apiUrl + "/" + id);
  }


}
