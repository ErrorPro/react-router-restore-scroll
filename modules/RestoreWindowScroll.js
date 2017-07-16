import React from 'react'
import PropTypes from 'prop-types'

class RestoreWindowScroll extends React.Component {
  static propTypes = {
    restoreWindow: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.restoreWindow(this.props.location)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location)
      this.props.restoreWindow(this.props.location)
  }

  render() {
    return React.Children.only(this.props.children)
  }

}

export default RestoreWindowScroll

