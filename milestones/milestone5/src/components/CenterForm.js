import React, { useState } from 'react';
import dataSource from '../dataSource';
import { useNavigate } from 'react-router-dom';

const CenterForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [openings, setOpenings] = useState('');
  const [price, setPrice] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newCenter = {
      name: name,
      description: description,
      rating: rating,
      openings: openings,
      price_per_week: price
    };

    await dataSource.post('/api/centers', newCenter);

    navigate('/');
  };

  return (
    <div className="container mt-3">
      <h2>Add New Center</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Name"
          value={name} onChange={(e) => setName(e.target.value)} />

        <input className="form-control mb-2" placeholder="Description"
          value={description} onChange={(e) => setDescription(e.target.value)} />

        <input className="form-control mb-2" placeholder="Rating"
          value={rating} onChange={(e) => setRating(e.target.value)} />

        <input className="form-control mb-2" placeholder="Openings"
          value={openings} onChange={(e) => setOpenings(e.target.value)} />

        <input className="form-control mb-2" placeholder="Price per week"
          value={price} onChange={(e) => setPrice(e.target.value)} />

        <button className="btn btn-success">Save</button>
      </form>
    </div>
  );
};

export default CenterForm;