import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServletService {

  constructor(private _http:HttpClient) { }

  register(userdata)
  {
    return this._http.post("http://localhost:8080/DriveTrack/createServlet",userdata);
  }

  viewData()
  {
    return this._http.get("http://localhost:8080/DriveTrack/viewServlet");
  }
  
  deleteData(cid)
  {
    return this._http.post("http://localhost:8080/DriveTrack/deleteServlet",cid);
  }

  editData(updatedData)
  {
    return this._http.post("http://localhost:8080/DriveTrack/editServlet",updatedData);
  }

}
