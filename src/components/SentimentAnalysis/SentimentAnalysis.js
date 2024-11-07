import React from 'react';
import './SentimentAnalysis.css';
import useStore from '../../store/appStore';

const SentimentAnalysis = () => {
  const sentimentData = useStore((state) => state.sentimentData);

  return (
    <div className="sentiment-container">
      <h1>Sentiment Analysis</h1>
      <div className="sentiment-content">
        <div className="sentiment-card">
          <h3>Market Sentiment</h3>
          <p>{sentimentData?.marketTrend || 'Current market sentiment analysis and trends'}</p>
        </div>
        <div className="sentiment-metrics">
          <div className="metric">
            <h4>Positive Sentiment</h4>
            <p>{sentimentData?.positive || '75%'}</p>
          </div>
          <div className="metric">
            <h4>Neutral Sentiment</h4>
            <p>{sentimentData?.neutral || '15%'}</p>
          </div>
          <div className="metric">
            <h4>Negative Sentiment</h4>
            <p>{sentimentData?.negative || '10%'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalysis;
