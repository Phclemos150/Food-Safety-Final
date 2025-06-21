import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private cache = new Map<string, string>();

  constructor(private http: HttpClient) {}

  traduzir(texto: string, from = 'en', to = 'pt'): Promise<string> {
    if (!texto) return Promise.resolve('');
    if (this.cache.has(texto)) return Promise.resolve(this.cache.get(texto)!);

    let params = new HttpParams()
      .set('q', texto)
      .set('langpair', `${from}|${to}`);

    if (environment.myMemoryApiKey) {
      params = params.set('key', environment.myMemoryApiKey);
    }

    return this.http.get<any>('https://api.mymemory.translated.net/get', { params })
      .toPromise()
      .then(res => {
        const translated = res?.responseData?.translatedText ?? texto;
        this.cache.set(texto, translated);
        return translated;
      })
      .catch(() => texto);
  }
}
