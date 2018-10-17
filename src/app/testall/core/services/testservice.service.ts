/**
 * 
 * Date: 10/10/2018	
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TestserviceService {
	
	constructor(private httpClient: HttpClient) { 
	}
	
	public findall(id: String): Observable<any> {
		return this.httpClient.get('/testservice/findall/'+id);
	}
	
	
}

