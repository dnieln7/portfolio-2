import {Observable, throwError} from 'rxjs';

export function handleError(error: any): Observable<never> {
  let errorMessage = '';

  if (error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status} \nMessage: ${error.message}`;
  }

  if (error.message.split('/')[3] === 'sellers') {
    errorMessage = 'Cannot delete, this seller has registered products!';
  }

  window.alert(errorMessage);

  return throwError(errorMessage);
}
