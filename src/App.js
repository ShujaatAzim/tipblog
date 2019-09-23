import React from 'react';

class App extends React.Component {

  state = {
    total: "",
    service: "",
    partySize: "",
    totalTip: "",
    tipPP: ""
  }

  handleTotal = (event) => {
    this.setState({
      total: event.target.value
    })
  }

  handleService = (event) => {
    this.setState({
      service: event.target.value
    })
  }

  handleParty = (event) => {
    this.setState({
      partySize: event.target.value
    })
  }

  genTip = (event) => {
    event.preventDefault();
    let tip = parseFloat(this.state.total * this.state.service).toFixed(2)
    let totalTipPP = parseFloat(tip / this.state.partySize).toFixed(2)
    this.setState({
      totalTip: tip,
      tipPP: totalTipPP
    })
  }


  render() {
    return (
      <div style={{ backgroundColor: "whitesmoke"}}>
        <h1>My Tip App</h1>
        <form onSubmit={this.genTip}>
          <label>
            Bill total:
            <input required type="text" placeholder="$" value={this.state.total} onChange={this.handleTotal} />
          </label>
          <label>
            Service:
            <input required type="text" placeholder="%" value={this.state.service} onChange={this.handleService} />
          </label>
          <label>
            Party Size:
            <input required type="text" placeholder ="#" value={this.state.partySize} onChange={this.handleParty} />
          </label>
          <input type="submit" />
        </form>
        <p>Tip: ${this.state.totalTip}</p>
        <p>Per person: ${this.state.tipPP}</p>
      </div>
    );
  }
}

export default App;
