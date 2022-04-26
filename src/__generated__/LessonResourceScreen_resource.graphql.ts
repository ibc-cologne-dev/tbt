/**
 * @generated SignedSource<<2f8d26adb74224a40029fdc3a303c153>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type Media = "text" | "audio" | "video" | "image" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type LessonResourceScreen_resource$data = {
  readonly title: string | null;
  readonly image_header: string | null;
  readonly content: ReadonlyArray<{
    readonly type: Media | null;
    readonly value: string | null;
  } | null> | null;
  readonly type: {
    readonly title: string;
  };
  readonly " $fragmentType": "LessonResourceScreen_resource";
} | null;
export type LessonResourceScreen_resource$key = {
  readonly " $data"?: LessonResourceScreen_resource$data;
  readonly " $fragmentSpreads": FragmentRefs<"LessonResourceScreen_resource">;
};

const node: ReaderFragment = (function(){
var v0 = {
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
  "name": "LessonResourceScreen_resource",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "image_header",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MediaType",
      "kind": "LinkedField",
      "name": "content",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "concreteType": "ResourceType",
        "kind": "LinkedField",
        "name": "type",
        "plural": false,
        "selections": [
          {
            "kind": "RequiredField",
            "field": (v0/*: any*/),
            "action": "NONE",
            "path": "type.title"
          }
        ],
        "storageKey": null
      },
      "action": "NONE",
      "path": "type"
    }
  ],
  "type": "Resource",
  "abstractKey": null
};
})();

(node as any).hash = "0730bfbbb9f933944fd1a3323051dd1a";

export default node;
