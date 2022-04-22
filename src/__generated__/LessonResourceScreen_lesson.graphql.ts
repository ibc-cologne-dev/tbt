/**
 * @generated SignedSource<<426c652d1182015e335af5564ef1685f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LessonResourceScreen_lesson$data = {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string | null;
  readonly number: number;
  readonly color: string | null;
  readonly " $fragmentType": "LessonResourceScreen_lesson";
} | null;
export type LessonResourceScreen_lesson$key = {
  readonly " $data"?: LessonResourceScreen_lesson$data;
  readonly " $fragmentSpreads": FragmentRefs<"LessonResourceScreen_lesson">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LessonResourceScreen_lesson",
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

(node as any).hash = "0d79331ffeb85d8cced0e7044d90e617";

export default node;
