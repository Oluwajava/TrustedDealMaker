import {Injectable} from "@angular/core";
import {ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Constants} from "../constants-utils";

@Injectable()
export class InterceptedHttp extends Http {
  demo: boolean = false;
  hash: string;
  private API_URL: string = Constants.BASE_URL;
  private apiKey: any;
  private apiToken: any;
  private requestId: any;
  private timeStamp: any;

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    // url = Constants.MOCK_BASE_URL+url;
    url = this.appendBaseUrl(url);
    return super.get(url, this.getRequestOptionsArgs(options));
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    url = this.appendBaseUrl(url);
    return super.post(url, body, this.getRequestOptionsArgs(options));
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    url = this.appendBaseUrl(url);
    return super.put(url, body, this.getRequestOptionsArgs(options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.appendBaseUrl(url);
    return super.delete(url, this.getRequestOptionsArgs(options));
  }

  appendBaseUrl(url: string) {
    return this.API_URL + url;
  }

  private getRequestOptionsArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }

    if (!this.demo) {
      this.API_URL = Constants.BASE_URL;
    }

    options.headers.append('Content-Type', 'application/json');
    options.headers.append('Accept', 'application/json');

    return options;
  }

}
