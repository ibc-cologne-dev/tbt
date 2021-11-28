declare module 'babel-plugin-relay/macro' {
  export {graphql as default} from 'react-relay';
}

declare module '@env' {
  export const API_URL: string;
}
