import React, { useEffect, useState } from 'react';
import dataSource from '../dataSource';
import { useNavigate } from 'react-router-dom';

const CenterList = () => {
  const [centers, setCenters] = useState([]);
    
  const navigate = useNavigate();

  const loadCenters = async () => {
    const response = await dataSource.get('/api/centers');
    setCenters(response.data);
  };

  useEffect(() => {
    loadCenters();
  }, []);

  return (
    <div className="container mt-3">
      <h2>Little Care Centers</h2>

      {centers.map((center) => (
        <div key={center.id} 
        className="card mb-3 p-3"
        onClick={() => navigate(`/centers/${center.id}`)}
        style={{ cursor: 'pointer' }}
        >
          <h4>{center.name}</h4>
          <p>{center.description}</p>
          <p>Rating: {center.rating}</p>
          <p>Openings: {center.openings}</p>
          <p>Price per week: ${center.price_per_week}</p>
        </div>
      ))}
    </div>
  );
};

export default CenterList;