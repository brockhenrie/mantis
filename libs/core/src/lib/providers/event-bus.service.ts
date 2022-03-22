import { Inject, Injectable } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';
import { MetaData } from 'ng-event-bus/lib/meta-data';
import { Observable } from 'rxjs';

@Injectable()
export class EventBusService {
    constructor( private eb: NgEventBus) {}

    createEvent(event: string, data: any) {
        this.eb.cast(event, { ...data });
    }

    onKeyMatch(key: string, key2: string):boolean {
     return this.eb.keyMatch(key,key2)
    }

    onListen(event: string){
      return this.eb.on(event) as unknown as Observable<MetaData>;
    }
}


