// src/App.jsx
import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import ServiceForm from './components/ServiceForm';
import './App.css';

function App() {
  const [services, setServices] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = (newService) => {
    if (isEdit) {
      const updatedServices = services.map((service, index) =>
        index === editIndex ? newService : service
      );
      setServices(updatedServices);
      setIsEdit(false);
    } else {
      setServices([...services, newService]);
    }
  };

  const handleDelete = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  const handleEdit = (index) => {
    setCurrentService(services[index]);
    setIsEdit(true);
    setEditIndex(index);
  };

  return (
    <div className="App">
      <div className="bg-light py-5">
        <div className="container">
          <ServiceForm
            currentService={currentService}
            handleAddOrUpdate={handleAddOrUpdate}
            isEdit={isEdit}
          />
          <ServiceList
            services={services}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
