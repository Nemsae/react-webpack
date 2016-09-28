import React from 'react'
import { render } from 'react-dom'

import Layout from './components/Layout'

import './stores/PokemonStore'

render(
  <Layout/>,
  document.getElementById('root')
);
