/**
 * @generated SignedSource<<1da1e9239a02fd516d95dafb1458cc47>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TbtsScreenTbtQuery$variables = {};
export type TbtsScreenTbtQuery$data = {
  readonly tbts: ReadonlyArray<{
    readonly id: string;
    readonly image: string | null;
    readonly title: string | null;
  } | null> | null;
};
export type TbtsScreenTbtQuery = {
  variables: TbtsScreenTbtQuery$variables;
  response: TbtsScreenTbtQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Tbt",
    "kind": "LinkedField",
    "name": "tbts",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "image",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TbtsScreenTbtQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TbtsScreenTbtQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b5224f063f2ee515f1fa63df89e9f149",
    "id": null,
    "metadata": {},
    "name": "TbtsScreenTbtQuery",
    "operationKind": "query",
    "text": "query TbtsScreenTbtQuery {\n  tbts {\n    id\n    image\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "6fd0b6f0f12858b1e941503c409454cb";

export default node;
