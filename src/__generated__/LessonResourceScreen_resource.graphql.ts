/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Media = "audio" | "image" | "text" | "video" | "%future added value";
export type LessonResourceScreen_resource = {
    readonly title: string | null;
    readonly image_header: string | null;
    readonly content: ReadonlyArray<{
        readonly type: Media | null;
        readonly value: string | null;
    } | null> | null;
    readonly " $refType": "LessonResourceScreen_resource";
};
export type LessonResourceScreen_resource$data = LessonResourceScreen_resource;
export type LessonResourceScreen_resource$key = {
    readonly " $data"?: LessonResourceScreen_resource$data;
    readonly " $fragmentRefs": FragmentRefs<"LessonResourceScreen_resource">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LessonResourceScreen_resource",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
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
    }
  ],
  "type": "Resource",
  "abstractKey": null
};
(node as any).hash = '456f825c4fc50db3b1f0f28290ace2ff';
export default node;
