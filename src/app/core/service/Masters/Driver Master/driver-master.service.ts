import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriverMasterService {

  constructor(private http: HttpClient) {}

  // getMasterCommon(URL,Request) {
  //   return this.http.get<any>(
  //     `${environment.MasterBaseURL}`+URL + Request
  //   );
  // }
  getMasterCommon(Request) {
    return this.http.get<any>(
      ` http://localhost:7265/api/DMS/Master/Driver/GetDriverDetails/` + Request
    );
  }
 
  postMasterCommon(URL,Request) {
    return this.http.post<any>(
      `${environment.MasterBaseURL}`+URL,
      Request
    );
  }
}
