// Documentation: https://github.com/VirtusLab-Open-Source/strapi-plugin-navigation

import qs from 'qs';
const url = process.env.API_URL || 'http://localhost:1337';

interface QueryProps {
  navigationId: string;
  locale?: any;
  type: 'FLAT' | 'TREE' | 'RFR';
}

export const fetchNavigation = async <T>({
  navigationId,
  locale,
  type
}: QueryProps): Promise<T | {}> => {

  try {
      const query = qs.stringify({
        type,
        locale
      }, {
          encodeValuesOnly: true,
          skipNulls: true,
        });
  
        
        const response = await fetch(`${url}${navigationId}?${query}`);
        const data = await response.json();
        
        if (!data) { return {} };
        
      return data;
  
    } catch (error) {
      console.error(error);
      return {}; // Devuelve un objeto vacío en caso de error
    }
}