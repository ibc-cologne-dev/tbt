/**
 * @generated SignedSource<<3eaa86b165247e31f5c939670c222f1a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SplashScreenTbtQuery$variables = {};
export type SplashScreenTbtQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"TbtsScreen_query">;
};
export type SplashScreenTbtQuery = {
  variables: SplashScreenTbtQuery$variables;
  response: SplashScreenTbtQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SplashScreenTbtQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TbtsScreen_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SplashScreenTbtQuery",
    "selections": [
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
    ]
  },
  "params": {
    "cacheID": "76f68af6625a4814d89ef58e71e7560b",
    "id": null,
    "metadata": {},
    "name": "SplashScreenTbtQuery",
    "operationKind": "query",
    "text": "query SplashScreenTbtQuery {\n  ...TbtsScreen_query\n}\n\nfragment TbtsScreen_query on Query {\n  tbts {\n    id\n    title\n  }\n}\n"
  }
};

(node as any).hash = "c76b020b81edfb2244015dae5fe48ce6";

export default node;
