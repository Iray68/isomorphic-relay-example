import Home from '../components/Home';
import { hydrate } from 'react-dom';
import React from 'react';
import environment from '../relay/environment';

hydrate(<Home environment={environment} />, document.getElementById('app'));