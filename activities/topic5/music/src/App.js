import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div>
      <h1>Music that I like!!</h1>

      <Card
        albumTitle="Tickets to My Downfall"
        albumDescription={`Tickets to My Downfall (2020) is Machine Gun Kelly's fifth studio album, marking a significant, successful shift from rap to pop-punk. Executive produced by Travis Barker, the platinum-certified album features a guitar-driven, nostalgic sound with hits like "Bloody Valentine" and "My Ex's Best Friend". It explores themes of reckless fame, heartbreak, and emotional vulnerability with a high-energy, summertime vibe.`}
        imgURL="https://upload.wikimedia.org/wikipedia/en/b/bb/Machine_Gun_Kelly_-_Tickets_to_My_Downfall.png"
        buttonText="OK"
      />

      <Card />
      <Card />
    </div>
  );
};

export default App;