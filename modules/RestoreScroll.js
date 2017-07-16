import React from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'

class RestoreScroll extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    scrollKey: PropTypes.string.isRequired
  }

  componentDidMount() {
    const { registerScroller } = this.context.router.restoreScroll
    registerScroller(this.props.scrollKey, findDOMNode(this))
  }

  componentWillUnmount() {
    const { unregisterScroller } = this.context.router.restoreScroll
    unregisterScroller(this.props.scrollKey)
  }

  render() {
    return React.Children.only(this.props.children)
  }
}

export default RestoreScroll

