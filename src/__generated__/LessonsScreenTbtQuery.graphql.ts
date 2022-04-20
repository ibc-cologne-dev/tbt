/**
 * @generated SignedSource<<e07bddffa5d7003e09281ecd2e17732b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LessonsScreenTbtQuery$variables = {
  id: string;
};
export type LessonsScreenTbtQuery$data = {
  readonly lessons: ReadonlyArray<{
    readonly id: string;
    readonly title: string;
    readonly subtitle: string | null;
    readonly number: number;
    readonly color: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"LessonResourcesScreen_lesson">;
  } | null>;
} | null;
export type LessonsScreenTbtQuery = {
  variables: LessonsScreenTbtQuery$variables;
  response: LessonsScreenTbtQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "subtitle",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "number",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "color",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LessonsScreenTbtQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": (v1/*: any*/),
          "concreteType": "Lesson",
          "kind": "LinkedField",
          "name": "lessons",
          "plural": true,
          "selections": [
            {
              "kind": "RequiredField",
              "field": (v2/*: any*/),
              "action": "NONE",
              "path": "lessons.id"
            },
            {
              "kind": "RequiredField",
              "field": (v3/*: any*/),
              "action": "NONE",
              "path": "lessons.title"
            },
            (v4/*: any*/),
            {
              "kind": "RequiredField",
              "field": (v5/*: any*/),
              "action": "NONE",
              "path": "lessons.number"
            },
            (v6/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "LessonResourcesScreen_lesson"
            }
          ],
          "storageKey": null
        },
        "action": "NONE",
        "path": "lessons"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LessonsScreenTbtQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Lesson",
        "kind": "LinkedField",
        "name": "lessons",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Resource",
            "kind": "LinkedField",
            "name": "resources",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
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
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7b282504cf6aa239e56171e00b4454fb",
    "id": null,
    "metadata": {},
    "name": "LessonsScreenTbtQuery",
    "operationKind": "query",
    "text": "query LessonsScreenTbtQuery(\n  $id: ID!\n) {\n  lessons(id: $id) {\n    id\n    title\n    subtitle\n    number\n    color\n    ...LessonResourcesScreen_lesson\n  }\n}\n\nfragment LessonResourceScreen_resource on Resource {\n  title\n  image_header\n  content {\n    type\n    value\n  }\n}\n\nfragment LessonResourcesScreen_lesson on Lesson {\n  id\n  title\n  resources {\n    id\n    title\n    ...LessonResourceScreen_resource\n  }\n}\n"
  }
};
})();

(node as any).hash = "f2375b808a67e368edebbe58a02bb1d0";

export default node;
