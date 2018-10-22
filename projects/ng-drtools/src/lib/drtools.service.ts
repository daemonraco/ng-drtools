import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BasicDictionary } from './types';
import { DRToolsServiceConfig } from './drtools.service/types';
import { DRToolsServiceMySQL } from './drtools.service/mysql.connector';

@Injectable({
    providedIn: 'root'
})
export class DRToolsService {
    //
    // Protected class properties.
    protected static Config: DRToolsServiceConfig = {
        host: '',
        mysqlUri: '/rest',
    };
    //
    // Protected properties.
    protected mysqlTables: BasicDictionary<DRToolsServiceMySQL> = {};
    //
    // Construction.
    constructor(protected http: HttpClient) {
    }
    //
    // Public methods.
    public mysql(tableName: string): DRToolsServiceMySQL {
       if (typeof this.mysqlTables[tableName] === 'undefined') {
            this.mysqlTables[tableName] = new DRToolsServiceMySQL(tableName, DRToolsService.Config, this.http);
        }

        return this.mysqlTables[tableName];
    }
    //
    // Public class methods.
    public static SetConfig(conf: DRToolsServiceConfig) {
        DRToolsService.Config = conf;
    }
}
