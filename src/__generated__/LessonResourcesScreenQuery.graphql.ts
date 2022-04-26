/**
 * @generated SignedSource<<30d6e75491aec1bc0e6da75884faa435>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LessonResourcesScreenQuery$variables = {
  lessonId: string;
  tbtId: string;
};
export type LessonResourcesScreenQuery$data = {
  readonly lessonResources: ReadonlyArray<{
    readonly id: string;
    readonly title: string | null;
    readonly type: {
      readonly title: string;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"LessonResourceScreen_resource">;
  } | null> | null;
};
export type LessonResourcesScreenQuery = {
  variables: LessonResourcesScreenQuery$variables;
  response: LessonResourcesScreenQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "lessonId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "tbtId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "lessonId",
    "variableName": "lessonId"
  },
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LessonResourcesScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Resource",
        "kind": "LinkedField",
        "name": "lessonResources",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ResourceType",
            "kind": "LinkedField",
            "name": "type",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "LessonResourceScreen_resource"
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
    "name": "LessonResourcesScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Resource",
        "kind": "LinkedField",
        "name": "lessonResources",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ResourceType",
            "kind": "LinkedField",
            "name": "type",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/)
            ],
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f516dfe6b141ecd9aceac64393551518",
    "id": null,
    "metadata": {},
    "name": "LessonResourcesScreenQuery",
    "operationKind": "query",
    "text": "query LessonResourcesScreenQuery(\n  $lessonId: ID!\n  $tbtId: ID!\n) {\n  lessonResources(lessonId: $lessonId, tbtId: $tbtId) {\n    id\n    title\n    type {\n      title\n      id\n    }\n    ...LessonResourceScreen_resource\n  }\n}\n\nfragment LessonResourceScreen_resource on Resource {\n  title\n  image_header\n  content {\n    type\n    value\n  }\n  type {\n    title\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "1ce3dc90ed97c3924585bf1a3e09c6b9";

export default node;
