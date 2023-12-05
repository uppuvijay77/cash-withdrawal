// Write your code here
import {Component} from 'react'
import './index.css'
import ExportedCompatObject from 'core-js-compat'

class DenominationItem extends Component {
  render() {
    const {buttonDetails} = this.props
    const {id, value} = buttonDetails
    return <li className="button">{value}</li>
  }
}
export default DenominationItem
