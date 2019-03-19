import React,{Fragment,PureComponent } from "react";

export default class Index extends PureComponent {
    state = { data: []}
    async componentDidMount() {
        const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
        const json = await response.json();
        this.setState({ data: json });
      }
    render(){
         return(
          <Fragment>
                <ul>
                {this.state.data.map(el => (
                    <li>
                    {el.name}: {el.price_usd}
                    </li>
                ))}
                </ul>
          </Fragment>   
         )
    }
}