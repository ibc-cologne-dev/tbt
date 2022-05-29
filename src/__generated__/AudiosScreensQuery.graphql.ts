/**
 * @generated SignedSource<<bb4e0ca0d8fcba498ee82e0283eaf899>>
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
    readonly subtitle: string;
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
  "name": "subtitle",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "file",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artist",
  "storageKey": null
},
v4 = {
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
              "path": "audios.subtitle"
            },
            {
              "kind": "RequiredField",
              "field": (v2/*: any*/),
              "action": "NONE",
              "path": "audios.file"
            },
            {
              "kind": "RequiredField",
              "field": (v3/*: any*/),
              "action": "NONE",
              "path": "audios.artist"
            },
            {
              "kind": "RequiredField",
              "field": (v4/*: any*/),
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
          (v4/*: any*/),
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
    "cacheID": "9e4b432cb1766314b1c01729a01ee0ae",
    "id": null,
    "metadata": {},
    "name": "AudiosScreensQuery",
    "operationKind": "query",
    "text": "query AudiosScreensQuery {\n  audios {\n    title\n    subtitle\n    file\n    artist\n    audio_duration\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "335fd6edfe40f4a09cd5af4559ba4199";

export default node;
