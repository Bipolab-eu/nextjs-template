/* 
Interactive Strapi Query Builder 
https://docs.strapi.io/cms/api/rest/interactive-query-builder
*/

import qs from 'qs';
import { populateDinamicZoneQuery } from './dinamicZoneQuery';
const url = process.env.API_URL || 'http://localhost:1337';

interface QueryProps {
  apiRoute: string,
  locale?: any,
  sort?: string[],
  filters?: Record<string, any>;
  fields?: string[]
}

export const fetchApi = async <T>({
  apiRoute,
  locale,
  sort,
  filters,
  fields
}: QueryProps): Promise<T | {}> => {

  try {
    const query = qs.stringify({
      // apiRoute,
      locale,
      sort,
      filters,
      populate: populateDinamicZoneQuery,
      fields
    }, {
        encodeValuesOnly: true,
        skipNulls: true,
      });

      
      const response = await fetch(`${url}${apiRoute}?${query}`);
      const { data } = await response.json();
      
      if (!data) { return {} };
      
    return data;

  } catch (error) {
    console.error(error);
    return {}; // Devuelve un objeto vacío en caso de error
  }
}