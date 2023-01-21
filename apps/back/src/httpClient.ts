import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

// same object, but with updated typings.
export const httpClient = setupCache(Axios, {
  debug: console.log,
  ttl: 1000 * 60 * 60, // 1 heure
});
