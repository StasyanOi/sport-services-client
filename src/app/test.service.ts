import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Test} from './components/objects/test';
import {Room} from './components/objects/room';
import {Trainer} from './components/objects/trainer';
import {Credentials} from './components/objects/creds';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private url = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }


  test(): Observable<Test>{
    return this.httpClient.get<Test>(this.url + '/v1/api/test');
  }

  getRooms(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(this.url + '/v1/api/room/all');
  }

  getTrainers(): Observable<Trainer[]> {
    return this.httpClient.get<Trainer[]>(this.url + '/v1/api/trainer/all');
  }

  getProfile(): Observable<string> {
    return this.httpClient.get<string>(this.url + '/v1/api/profile');
  }

  login(body: string): void {
    this.httpClient.post(this.url + '/login', body)
      .subscribe(value => console.log(value));
  }
}
