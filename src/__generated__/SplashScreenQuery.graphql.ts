/**
 * @generated SignedSource<<4794c196d498293431bb4b8399fd612f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SplashScreenQuery$variables = {};
export type SplashScreenQuery$data = {
  readonly tbts: ReadonlyArray<{
    readonly id: string;
    readonly title: string;
  } | null>;
  readonly " $fragmentSpreads": FragmentRefs<"TbtsScreen_tbts">;
} | null;
export type SplashScreenQuery = {
  variables: SplashScreenQuery$variables;
  response: SplashScreenQuery$data;
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
    "name": "SplashScreenQuery",
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
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TbtsScreen_tbts"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SplashScreenQuery",
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
    "cacheID": "db51f455b90849b9f7f6b07f2b2763ad",
    "id": null,
    "metadata": {},
    "name": "SplashScreenQuery",
    "operationKind": "query",
    "text": "query SplashScreenQuery {\n  tbts {\n    id\n    title\n  }\n  ...TbtsScreen_tbts\n}\n\nfragment TbtsScreen_tbts on Query {\n  tbts {\n    id\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "22c4c8fe0116b5df4f3b46beeb2f2fe5";

export default node;
