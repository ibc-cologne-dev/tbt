/**
 * @generated SignedSource<<d04e8e324df3f75ccf558d201c973848>>
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
    "cacheID": "bcca15b3d896c1fc702ecc58edbd6c58",
    "id": null,
    "metadata": {},
    "name": "TbtsScreenTbtQuery",
    "operationKind": "query",
    "text": "query TbtsScreenTbtQuery {\n  tbts {\n    id\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "257b1f5d6bfedc38ce152198118a4bb1";

export default node;
