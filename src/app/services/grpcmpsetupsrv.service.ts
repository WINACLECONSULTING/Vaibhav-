import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://127.0.0.1:8083/api/enterprisecompanies';

export interface Company {
	regentid; 
	regenttype;
	regentname; 
	regentaddrnum;
}

@Injectable({
  providedIn: 'root'
})


export class GrpcmpsetupsrvService {

  Companies: Company[];

  constructor(private http: HttpClient) { }

  getAll() {

    console.log("BASER URL");
    console.log(baseUrl);
 //console.log(this.http.get(baseUrl));
//    return this.http.get(baseUrl);;

    return this.http.get(baseUrl);

  }

/*  get(regentid) {
    return this.http.get(`${baseUrl}/${regentid}`);
  }
*/
  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(regentid, data) {
    console.log("IN UPDATE")
    return this.http.put(`${baseUrl}/${regentid}`, data);
  }


  updateAll(Companies) {
    //return this.http.put(`${baseUrl}/bulkupdatecompany/${Companies}`, Companies);
    //return this.http.put(`${baseUrl}/bulkupdatecompany/`, Companies);
    return this.http.put(`${baseUrl}/bulkupdatecompany/`,Companies);
  }

  delete(regentid) {
    return this.http.delete(`${baseUrl}/${regentid}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByGroupCompanyId(regentid) {
    return this.http.get(`${baseUrl}?regentid=${regentid}`);
  }
}

