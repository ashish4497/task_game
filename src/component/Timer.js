import React, { Component } from "react";
export var Winnerplayer = "";
export default class timer extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = { seconds: props.seconds, player: this.props.player };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  tick() {
    if (this.state.seconds > 0) {
      this.setState({ seconds: this.state.seconds - 1 });
    } else {
      clearInterval(this.timer);
      window.location.reload();
    }
  }
  render() {
    if (this.state.seconds === 0 && this.state.player === "first") {
      Winnerplayer = "second";
    } else {
      Winnerplayer = "first";
    }
    console.log(Winnerplayer, "getting the winer");
    return (
      <div style={{ width: "100%", textAlign: "center" }}>
        <h1>{this.state.seconds}...</h1>
      </div>
    );
  }
}
