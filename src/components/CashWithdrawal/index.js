// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <div className="profile-container">
            <p className="profile-pic">S</p>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>
          <h1 className="balance">Withdrawal</h1>
          <p className="rupees-text">CHOOSE SOME (IN RUPEES)</p>
          <div className="button-container">
            {denominationsList.map(eachButton => (
              <DenominationItem
                buttonDetails={eachButton}
                key={eachButton.id}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
