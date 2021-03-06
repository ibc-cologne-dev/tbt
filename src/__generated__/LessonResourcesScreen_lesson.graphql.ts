/**
 * @generated SignedSource<<16dff6d739b2abc906cc25a1baf9543a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LessonResourcesScreen_lesson$data = {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string | null;
  readonly number: number;
  readonly color: string | null;
  readonly " $fragmentSpreads": FragmentRefs<"LessonResourceScreen_lesson">;
  readonly " $fragmentType": "LessonResourcesScreen_lesson";
} | null;
export type LessonResourcesScreen_lesson$key = {
  readonly " $data"?: LessonResourcesScreen_lesson$data;
  readonly " $fragmentSpreads": FragmentRefs<"LessonResourcesScreen_lesson">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LessonResourcesScreen_lesson",
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
      "path": "id"
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
      "path": "title"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "subtitle",
      "storageKey": null
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "number",
        "storageKey": null
      },
      "action": "NONE",
      "path": "number"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "color",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LessonResourceScreen_lesson"
    }
  ],
  "type": "ShortLessonItem",
  "abstractKey": null
};

(node as any).hash = "5187eadeef698d3d8481a0bcbbe2f67f";

export default node;
