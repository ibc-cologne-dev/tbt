import {useState} from 'react';
import {loadQuery} from 'react-relay';
import environment from '../utils';
import {TbtsScreenQuery} from '../__generated__/TbtsScreenQuery.graphql';

let initalQueryRef = loadQuery(environment, TbtsScreenQuery);

export const useInitialQuery = () => {
  const [initialQuery, setInitialQuery] = useState(initalQueryRef);

  return initalQuery;
};
