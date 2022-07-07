'use strict'

const loginContainer = document.getElementById('login-container')

const returnOverlay = () => loginContainer.classList.remove('move')

const moveOverlay = () => loginContainer.classList.add('move')

document.getElementById('open-register').addEventListener('click', moveOverlay)

document.getElementById('open-login').addEventListener('click', returnOverlay)