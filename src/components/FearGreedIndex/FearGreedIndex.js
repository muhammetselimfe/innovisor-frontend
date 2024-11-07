import React from 'react';
import GaugeChart from 'react-gauge-chart';
import useStore from '../../store/appStore';

const FearGreedIndex = () => {
  const { fearGreedIndex, indexCategory } = useStore(
    (state) => state.marketSentiment
  );

  const gaugeValue = fearGreedIndex / 100;

  return (
    <div className="fear-greed-container">
      <h3>Market Fear & Greed Index: {fearGreedIndex}</h3>
      <div className="gauge-wrapper">
        <GaugeChart
          id="fear-greed-gauge"
          nrOfLevels={5}
          percent={gaugeValue}
          colors={['#E31A1C', '#FF7F00', '#FFFF33', '#33A02C', '#1F78B4']}
          arcWidth={0.3}
          textColor="#000000"
          needleColor="#000000"
          needleBaseColor="#000000"
          animate={true}
          formatTextValue={value => Math.round(value)}
        />
      </div>
      <div className="index-category">
        Current Status: <strong>{indexCategory}</strong>
      </div>
    </div>
  );
};

export default FearGreedIndex;
