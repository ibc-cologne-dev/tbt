/**
 * @generated SignedSource<<d48c744fe948460827a4554e7da72e2b>>
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
    }
  ],
  "type": "ShortLessonItem",
  "abstractKey": null
};

(node as any).hash = "a609a0bad8083521047a4bd959107fbf";

export default node;
