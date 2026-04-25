import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dataSource from '../dataSource';
import { useNavigate } from 'react-router-dom';

const CenterDetails = () => {
  const { id } = useParams();
  const [center, setCenter] = useState(null);
  const navigate = useNavigate();

  const loadCenter = async () => {
    const response = await dataSource.get(`/api/centers/${id}`);
    setCenter(response.data[0]);
  };

 

  useEffect(() => {
    loadCenter();
  }, [id]);

  if (!center) {
    return <div className="container mt-3">Loading...</div>;
  }

   const handleDelete = async () => {
    await dataSource.delete(`/api/centers/${id}`);
    navigate('/');
  };

  return (
    <div className="container mt-3">
      <h2>{center.name}</h2>

      <p><strong>Description:</strong> {center.description}</p>
      <p><strong>Rating:</strong> {center.rating}</p>
      <p><strong>Openings:</strong> {center.openings}</p>
      <p><strong>Price per week:</strong> ${center.price_per_week}</p>

      <button className="btn btn-danger mt-3" onClick={handleDelete}>
        Delete Center
        </button>
        
    <button className="btn btn-primary mt-2" onClick={() => navigate(`/edit/${id}`)}>
     Edit Center
    </button>
    </div>
  );
};

export default CenterDetails;