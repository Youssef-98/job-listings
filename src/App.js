import React from 'react';
import Header from './components/Header';
import JobListings from './components/JobListings';

function App() {
  return (
    <div className="App flex flex-col min-h-screen min-w-screen font-bold">
      <Header />
      <JobListings />
    </div>
  );
}

export default App;
