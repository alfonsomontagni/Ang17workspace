import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeOfErrorService {

 
  constructor() { }

    getTypeOfErrorCode(type: any) {
        switch (type) {

          case 'refDate':
              return 'S1';
          default:
              break;
      }

      return type;
      }

    getNameCol(format: any) {
        switch (format) {

            case 'refDate':
                return 'Date format';

            default:
                break;
        }

        return format;
    }
}
