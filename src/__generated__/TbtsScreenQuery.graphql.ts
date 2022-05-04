/**
 * @generated SignedSource<<dad3530a66941082b1e0f50101252cd9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TbtsScreenQuery$variables = {};
export type TbtsScreenQuery$data = {
  readonly tbts: ReadonlyArray<{
    readonly id: string;
    readonly title: string;
  } | null>;
} | null;
export type TbtsScreenQuery = {
  variables: TbtsScreenQuery$variables;
  response: TbtsScreenQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TbtsScreenQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": null,
          "concreteType": "Tbt",
          "kind": "LinkedField",
          "name": "tbts",
          "plural": true,
          "selections": [
            {
              "kind": "RequiredField",
              "field": (v0/*: any*/),
              "action": "NONE",
              "path": "tbts.id"
            },
            {
              "kind": "RequiredField",
              "field": (v1/*: any*/),
              "action": "NONE",
              "path": "tbts.title"
            }
          ],
          "storageKey": null
        },
        "action": "NONE",
        "path": "tbts"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TbtsScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Tbt",
        "kind": "LinkedField",
        "name": "tbts",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "727f9552dc0deb96811db8b25e04a946",
    "id": null,
    "metadata": {},
    "name": "TbtsScreenQuery",
    "operationKind": "query",
    "text": "query TbtsScreenQuery {\n  tbts {\n    id\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "ab64f1e3c6809059cad7fce11fb06793";

export default node;
