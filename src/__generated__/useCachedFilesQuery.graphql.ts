/**
 * @generated SignedSource<<579dec669563d53cb4310d181771d69f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type useCachedFilesQuery$variables = {};
export type useCachedFilesQuery$data = {
  readonly audios: ReadonlyArray<{
    readonly title: string;
    readonly file: string;
    readonly artist: string;
    readonly audio_duration: number;
  } | null>;
} | null;
export type useCachedFilesQuery = {
  variables: useCachedFilesQuery$variables;
  response: useCachedFilesQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "file",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artist",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "audio_duration",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useCachedFilesQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": null,
          "concreteType": "Audio",
          "kind": "LinkedField",
          "name": "audios",
          "plural": true,
          "selections": [
            {
              "kind": "RequiredField",
              "field": (v0/*: any*/),
              "action": "NONE",
              "path": "audios.title"
            },
            {
              "kind": "RequiredField",
              "field": (v1/*: any*/),
              "action": "NONE",
              "path": "audios.file"
            },
            {
              "kind": "RequiredField",
              "field": (v2/*: any*/),
              "action": "NONE",
              "path": "audios.artist"
            },
            {
              "kind": "RequiredField",
              "field": (v3/*: any*/),
              "action": "NONE",
              "path": "audios.audio_duration"
            }
          ],
          "storageKey": null
        },
        "action": "NONE",
        "path": "audios"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useCachedFilesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Audio",
        "kind": "LinkedField",
        "name": "audios",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8194986bc16a8d2737ae523a6d958ab5",
    "id": null,
    "metadata": {},
    "name": "useCachedFilesQuery",
    "operationKind": "query",
    "text": "query useCachedFilesQuery {\n  audios {\n    title\n    file\n    artist\n    audio_duration\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "4b7d696e118484dde7c2db53d3d27c88";

export default node;
