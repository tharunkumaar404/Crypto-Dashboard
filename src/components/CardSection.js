import React, { Component } from 'react'
import './CardSection.css'

export class CardSection extends Component {
    render() {
        return (
            <div>
                <div className="fs-1 fw-bold m-3 text-Capitalize" style={{
                    fontFamily: 'Arvo', marginTop: '3px !important',
                    marginBottom: '0px !important'
                }}>
                    {this.props.coinName}
                </div>
                <section className="row m-3 mb-0" style={{ marginTop: '2px !important' }}>
                    <div className="card text-white text-center m-3 baseBlock"
                        style={{ width: "11rem", backgroundColor: "rgb (43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'Arvo' }}>Market Capital 24Hrs</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#00AECF" }}>
                                {this.props.mCap24}%
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center m-3 baseBlock"
                        style={{ width: "11rem", backgroundColor: "rgb (43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'Arvo' }}> All Time Highest INR</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#00AECF" }}>
                                ₹{this.props.ath}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center m-3 baseBlockRed"
                        style={{ width: "11rem", backgroundColor: "rgb (43, 43, 43)", marginTop: "0px !important"}}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'Arvo' }}> All Time Lowest INR</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#FF555F" }}>
                                ₹{this.props.atl}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center m-3 baseBlock"
                        style={{ width: "11rem", backgroundColor: "rgb (43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'Arvo' }}>Sentiment of {this.props.coinName}</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#00AECF" }}>
                                {this.props.sentiment}%
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center m-3 baseBlock"
                        style={{ width: "11rem", backgroundColor: "rgb (43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'Arvo' }}> Highest Value 24Hrs</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#00AECF" }}>
                                ₹{this.props.high24}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center m-3 baseBlock"
                        style={{ width: "11rem", backgroundColor: "rgb (43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'Arvo' }}> Market Capital Rank</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#00AECF" }}>
                                {this.props.mCapRank}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default CardSection
