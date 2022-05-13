/**
 * @generated SignedSource<<e5fd453dbc00ff8c02e0131355631bad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AudiosScreensQuery$variables = {};
export type AudiosScreensQuery$data = {
  readonly audios: ReadonlyArray<{
    readonly title: string;
    readonly file: string;
    readonly artist: string;
    readonly audio_duration: number;
  } | null>;
} | null;
export type AudiosScreensQuery = {
  variables: AudiosScreensQuery$variables;
  response: AudiosScreensQuery$data;
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
    "name": "AudiosScreensQuery",
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
    "name": "AudiosScreensQuery",
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
    "cacheID": "19c9e8a68bc03dc487450258d34fba4f",
    "id": null,
    "metadata": {},
    "name": "AudiosScreensQuery",
    "operationKind": "query",
    "text": "query AudiosScreensQuery {\n  audios {\n    title\n    file\n    artist\n    audio_duration\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c0eeeefd2abe167d5f70d7d145eecbcc";

export default node;
