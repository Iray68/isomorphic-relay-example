/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Home_user$ref: FragmentReference;
declare export opaque type Home_user$fragmentType: Home_user$ref;
export type Home_user = {|
  +name: ?string,
  +label: ?string,
  +description: ?string,
  +$refType: Home_user$ref,
|};
export type Home_user$data = Home_user;
export type Home_user$key = {
  +$data?: Home_user$data,
  +$fragmentRefs: Home_user$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Home_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = '9fd9c6f4e55a4c19b6f27fccef6cbb62';
module.exports = node;
