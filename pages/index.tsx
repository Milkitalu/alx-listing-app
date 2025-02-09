import React from 'react';

import Card from '../components/commons/Card';
import Button from '../components/commons/Button';
import { DEFAULT_IMAGE_URL } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ALX Listing App</h1>
      <Card
        title="Beautiful Apartment"
        description="A cozy apartment in the heart of the city."
        imageUrl={DEFAULT_IMAGE_URL}
      />
      <Button label="Book Now" onClick={() => alert('Booking clicked!')} />
    </div>
  );
};

export default Home;