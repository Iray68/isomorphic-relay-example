/**
 * @flow
 * @relayHash bdbbcc327da87e826320cc77e0bcf4b8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type userQueryVariables = {||};
export type userQueryResponse = {|
  +user: ?{|
    +name: ?string,
    +label: ?string,
    +description: ?string,
  |}
|};
export type userQuery = {|
  variables: userQueryVariables,
  response: userQueryResponse,
|};
*/


/*
query userQuery {
  user {
    name
    label
    description
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "user",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "label",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "userQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "userQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "userQuery",
    "id": null,
    "text": "query userQuery {\n  user {\n    name\n    label\n    description\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f95a7ebb8bbce9745a5f9511980b97c';
module.exports = node;
