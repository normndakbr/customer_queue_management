import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class QueueManagementService {

  constructor(private http: HttpClient) { }

  
}
