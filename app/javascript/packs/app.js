// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Welcome React</div> at the bottom
// of the page.
import React from 'react'
import ReactDOM from 'react-dom'
import Welcome from './components/welcomes/WelcomePage'

document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById('abhibaReactApp')
  if (element == null) {
    ReactDOM.render(
      <Welcome/>,
      document.body.appendChild(document.createElement('div')),
    )
  }
})
