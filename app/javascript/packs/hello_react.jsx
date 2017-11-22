// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
  <div className="my-react">Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'Mayur'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(
    <Hello/>,
    document.body.appendChild(document.createElement('div')),
  )
})
