import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface DRLoadingServiceStatus {
    active: boolean;
    message: string;
}

@Injectable({
    providedIn: 'root'
})
export class DRLoadingService {
    //
    // Protected class properties.
    protected static StatusSource = new BehaviorSubject<DRLoadingServiceStatus>({
        active: false,
        message: null,
    });
    protected static CurrentStatus: Observable<DRLoadingServiceStatus> = DRLoadingService.StatusSource.asObservable();
    //
    // Construction.
    constructor() {
    }
    //
    // Public methods.
    public listen(): Observable<DRLoadingServiceStatus> {
        return DRLoadingService.CurrentStatus;
    }
    public start(message: string): void {
        DRLoadingService.StatusSource.next({
            active: true,
            message,
        });
    }
    public stop(): void {
        DRLoadingService.StatusSource.next({
            active: false,
            message: null,
        });
    }
}