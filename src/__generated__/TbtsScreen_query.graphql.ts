/**
 * @generated SignedSource<<d9c741e91ad51f69b23e7c6525676a1b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TbtsScreen_query$data = {
  readonly tbts: ReadonlyArray<{
    readonly id: string;
    readonly title: string | null;
  } | null> | null;
  readonly " $fragmentType": "TbtsScreen_query";
};
export type TbtsScreen_query$key = {
  readonly " $data"?: TbtsScreen_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"TbtsScreen_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TbtsScreen_query",
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
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "a3639710336e06e76db3df1bd5b32574";

export default node;
