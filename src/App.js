import React, { Component } from 'react';
import CardSection from './components/CardSection';
import ChartSection from './components/ChartSection';
import Header from './components/Header';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      Id: "bitcoin",
      Data: {}
    }
  }

  fetchData = async () => {
    let data = await fetch('https://api.coingecko.com/api/v3/coins/' + this.state.Id)
    let JsonData = await data.json()
    this.setState({ Id: this.state.Id, Data: JsonData })
  }

  handleSubmit = async (event) => {
    await this.setState({ Id: event.target.value, Data: this.state.Data })
    this.fetchData()
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <div>
        <Header handleSubmit={this.handleSubmit} />
        <CardSection coinName={this.state.Data.name}
          mCap24={this.state.Data.market_data ?
            this.state.Data.market_data.market_cap_change_percentage_24h : ""}
          ath={this.state.Data.market_data ?
            this.state.Data.market_data.ath.inr : ""}
          atl={this.state.Data.market_data ?
            this.state.Data.market_data.atl.inr : ""}
          sentiment={this.state.Data.sentiment_votes_up_percentage}
          high24={this.state.Data.market_data ? this.state.Data.market_data.high_24h.inr : ""}
          mCapRank={this.state.Data.market_data ? this.state.Data.market_data.market_cap_rank : ""}
          currentPrice={this.state.Data.market_data ? this.state.Data.market_data.current_price.inr : ""}
        />
        <ChartSection Id={this.state.Id} priceChange24={this.state.Data.market_data ? this.state.Data.market_data.price_change_24h_in_currency.inr : ""}
        MarketCap={this.state.Data.market_data ? this.state.Data.market_data.market_cap.inr : ""}
        TotalVolume={this.state.Data.market_data ? this.state.Data.market_data.total_volume.inr : ""}
        Circulating={this.state.Data.market_data ? this.state.Data.market_data.circulating_supply : ""}
        TwitterFollowers={this.state.Data.community_data ? this.state.Data.community_data.twitter_followers : ""}
        />
      </div>
    )
  }
}