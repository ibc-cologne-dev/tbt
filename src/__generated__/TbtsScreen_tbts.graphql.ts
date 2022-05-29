/**
 * @generated SignedSource<<b4bbef1f87c97f470b89efe41fc42ae1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TbtsScreen_tbts$data = {
  readonly tbts: ReadonlyArray<{
    readonly id: string;
    readonly title: string;
  } | null>;
  readonly " $fragmentType": "TbtsScreen_tbts";
} | null;
export type TbtsScreen_tbts$key = {
  readonly " $data"?: TbtsScreen_tbts$data;
  readonly " $fragmentSpreads": FragmentRefs<"TbtsScreen_tbts">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TbtsScreen_tbts",
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
            "field": {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            "action": "NONE",
            "path": "tbts.id"
          },
          {
            "kind": "RequiredField",
            "field": {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            },
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
};

(node as any).hash = "4e0a292647ffacc92a438962746e9a5d";

export default node;
