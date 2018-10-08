import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DRToolsServiceConfig } from './types';

export class DRToolsServiceMySQL {
    //
    // Protected properties.
    protected config: DRToolsServiceConfig;
    protected http: HttpClient;
    protected tableName: string;
    protected url: string;
    //
    // Construction.
    constructor(tableName: string, config: DRToolsServiceConfig, http: HttpClient) {
        this.config = config;
        this.http = http;
        this.tableName = tableName;

        this.url = `${this.config.host}${this.config.mysqlUri}/${this.tableName}`;
    }
    //
    // Public methods.
    public all(query: any = null, limit: number = 25, offset: number = 0, order: any = null): Observable<any> {
        let queryParam: string = this.queryForList(query, limit, offset, order);
        return this.http.get(`${this.url}?limit=${limit}&offset=${offset}${queryParam}`);
    }
    public create(data: any): Observable<any> {
        return this.http.post(`${this.url}`, data);
    }
    public count(query: any = null): Observable<any> {
        let queryParam: string = this.queryForList(query);
        return this.http.get(`${this.url}/$count?${queryParam}`);
    }
    public get(id: any): Observable<any> {
        return this.http.get(`${this.url}/${id}`);
    }
    public update(id: any, data: any): Observable<any> {
        return this.http.put(`${this.url}/${id}`, data);
    }
    //
    // Protected methods.
    protected queryForList(query: any = null, limit: number = 25, offset: number = 0, order: any = null): string {
        let queryParam: string = '';

        if (query && typeof query === 'object' && !Array.isArray(query) && Object.keys(query).length > 0) {
            queryParam += `&query=${encodeURI(JSON.stringify(query))}`;
        }
        if (order && typeof order === 'object' && !Array.isArray(order) && Object.keys(order).length > 0) {
            queryParam += `&order=${encodeURI(JSON.stringify(order))}`;
        }

        return queryParam;
    }
}
