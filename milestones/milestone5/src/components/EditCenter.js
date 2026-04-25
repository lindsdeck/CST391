import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dataSource from '../dataSource';

const EditCenter = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [center, setCenter] = useState({
    name: '',
    description: '',
    rating: '',
    openings: '',
    price_per_week: ''
  });

  const loadCenter = async () => {
    const response = await dataSource.get(`/api/centers/${id}`);
    setCenter(response.data[0]);
  };

  useEffect(() => {
    loadCenter();
  }, [id]);

  const handleChange = (e) => {
    setCenter({
      ...center,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dataSource.put(`/api/centers/${id}`, center);

    navigate(`/centers/${id}`);
  };

  return (
    <div className="container mt-3">
      <h2>Edit Center</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={center.name}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          name="description"
          value={center.description}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          name="rating"
          value={center.rating}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          name="openings"
          value={center.openings}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          name="price_per_week"
          value={center.price_per_week}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <button className="btn btn-warning">Update</button>
      </form>
    </div>
  );
};

export default EditCenter;