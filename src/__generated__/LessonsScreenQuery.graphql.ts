/**
 * @generated SignedSource<<7401c66445c0dd70a1d72c2df6c23fa3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LessonsScreenQuery$variables = {
  tbtId: string;
};
export type LessonsScreenQuery$data = {
  readonly lessons: ReadonlyArray<{
    readonly id: string;
    readonly title: string;
    readonly subtitle: string | null;
    readonly number: number;
    readonly color: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"LessonResourcesScreen_lesson">;
  } | null>;
} | null;
export type LessonsScreenQuery = {
  variables: LessonsScreenQuery$variables;
  response: LessonsScreenQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "tbtId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "tbtId",
    "variableName": "tbtId"
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
    "name": "LessonsScreenQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": (v1/*: any*/),
          "concreteType": "ShortLessonItem",
          "kind": "LinkedField",
          "name": "lessons",
          "plural": true,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "LessonResourcesScreen_lesson"
            },
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
            (v6/*: any*/)
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
    "name": "LessonsScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ShortLessonItem",
        "kind": "LinkedField",
        "name": "lessons",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "04abe07e18e7729a543bf6b2972625ee",
    "id": null,
    "metadata": {},
    "name": "LessonsScreenQuery",
    "operationKind": "query",
    "text": "query LessonsScreenQuery(\n  $tbtId: ID!\n) {\n  lessons(tbtId: $tbtId) {\n    ...LessonResourcesScreen_lesson\n    id\n    title\n    subtitle\n    number\n    color\n  }\n}\n\nfragment LessonResourcesScreen_lesson on ShortLessonItem {\n  id\n  title\n  subtitle\n  number\n  color\n}\n"
  }
};
})();

(node as any).hash = "f795730818746c6d7ade98d50eaa561c";

export default node;
