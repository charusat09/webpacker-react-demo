// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
  <div id="myReact" className="my-react">Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'Mayur'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById('myReact')
  if (element == null) {
    ReactDOM.render(
      <Hello/>,
      document.body.appendChild(document.createElement('div')),
    )
  }
})
