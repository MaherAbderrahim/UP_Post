"use client"
import React, { useState } from 'react';
import axios from 'axios';

const MaPage = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
  
    // URL de votre API
    const apiUrl = 'http://127.0.0.1:8000/get_data_FB/?pageid=';
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Afficher la réponse dans la console
      console.log(data);
    } catch (error) {
      console.error("Erreur lors de l'appel de l'API", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Ajouter une page</h1>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Chargement...' : 'Ajouter poche'}
      </button>
    </div>
  );
};

export default MaPage;

