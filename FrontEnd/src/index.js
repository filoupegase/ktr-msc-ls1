import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DataFetcher } from './DataFetcher';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './Pages/App';


async function initApp(dataFetcher) {
  const advertisementsList = await dataFetcher.fetchSource();

  ReactDOM.render(
      <React.StrictMode>
        <Router>
          <App advertisementsList={ advertisementsList }/>
        </Router>
      </React.StrictMode>,
      document.getElementById('root')
  );
}

const dataFetcher = new DataFetcher('http://localhost:3000/api/stuff');

initApp(dataFetcher);

reportWebVitals();
