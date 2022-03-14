/**
 * @generated SignedSource<<4d0819bb424141b2a0efb25e51ed484f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LessonScreen_lesson$data = {
  readonly id: string;
  readonly title: string | null;
  readonly resources: ReadonlyArray<{
    readonly id: string;
    readonly image_thumbnail: string | null;
    readonly title: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"LessonResourceScreen_resource">;
  } | null> | null;
  readonly " $fragmentType": "LessonScreen_lesson";
};
export type LessonScreen_lesson$key = {
  readonly " $data"?: LessonScreen_lesson$data;
  readonly " $fragmentSpreads": FragmentRefs<"LessonScreen_lesson">;
};

const node: ReaderFragment = (function(){
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LessonScreen_lesson",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Resource",
      "kind": "LinkedField",
      "name": "resources",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "image_thumbnail",
          "storageKey": null
        },
        (v1/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "LessonResourceScreen_resource"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Lesson",
  "abstractKey": null
};
})();

(node as any).hash = "ae537d335af15451c31c9a5d940ac9bf";

export default node;
