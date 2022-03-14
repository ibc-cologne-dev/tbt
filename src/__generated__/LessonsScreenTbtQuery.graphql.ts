/**
 * @generated SignedSource<<9cf389d02a7cfe6fbb1c8c3b48fdef7a>>
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
    readonly image: string | null;
    readonly title: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"LessonScreen_lesson">;
  } | null> | null;
};
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
  "name": "image",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "LessonScreen_lesson"
          }
        ],
        "storageKey": null
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
          {
            "alias": null,
            "args": null,
            "concreteType": "Resource",
            "kind": "LinkedField",
            "name": "resources",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "image_thumbnail",
                "storageKey": null
              },
              (v4/*: any*/),
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
    "cacheID": "ca8e0ed6ce0aea6c555821873d378af7",
    "id": null,
    "metadata": {},
    "name": "LessonsScreenTbtQuery",
    "operationKind": "query",
    "text": "query LessonsScreenTbtQuery(\n  $id: ID!\n) {\n  lessons(id: $id) {\n    id\n    image\n    title\n    ...LessonScreen_lesson\n  }\n}\n\nfragment LessonResourceScreen_resource on Resource {\n  title\n  image_header\n  content {\n    type\n    value\n  }\n}\n\nfragment LessonScreen_lesson on Lesson {\n  id\n  title\n  resources {\n    id\n    image_thumbnail\n    title\n    ...LessonResourceScreen_resource\n  }\n}\n"
  }
};
})();

(node as any).hash = "0fd2e8c81adb9cd8a9b4828f6477b76a";

export default node;
