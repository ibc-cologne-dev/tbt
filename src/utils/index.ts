import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestParameters,
  Variables,
} from 'relay-runtime';
import {API_URL} from '@env';

export const fetchGraphQL = async (text: string, variables: unknown) => {
  try {
    const response = await fetch(API_URL || 'http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error('error', JSON.stringify(e, null, 2));
  }
};

async function fetchRelay(params: RequestParameters, variables: Variables) {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`,
  );
  return fetchGraphQL(params.text ?? '', variables);
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
