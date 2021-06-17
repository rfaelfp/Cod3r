import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { Button } from '@material-ui/core';

import Logo from '../components/templates/Logo'
import Nav from '../components/templates/Nav'
import Main from '../components/templates/Main'
import Footer  from '../components/templates/Footer'

export default props =>
    <div className="app">
        <Button color="secondary">Secondary</Button>
        <Logo />
        <Nav />
        <Main icon="home" title="Início" subtitle="Segundo projecto do capítulo de React."/>

        <Footer />
    </div>