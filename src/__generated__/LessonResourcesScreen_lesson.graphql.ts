/**
 * @generated SignedSource<<215678a5804a405c3464f2ae8a358b27>>
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
  readonly title: string | null;
  readonly resources: ReadonlyArray<{
    readonly id: string;
    readonly title: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"LessonResourceScreen_resource">;
  } | null> | null;
  readonly " $fragmentType": "LessonResourcesScreen_lesson";
};
export type LessonResourcesScreen_lesson$key = {
  readonly " $data"?: LessonResourcesScreen_lesson$data;
  readonly " $fragmentSpreads": FragmentRefs<"LessonResourcesScreen_lesson">;
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
  "name": "LessonResourcesScreen_lesson",
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

(node as any).hash = "d88c13bb2774561276d7d249294ce9cb";

export default node;
