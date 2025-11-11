import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * React hook for passing event.target.value to navigate
 * */
const useNavRoute = event => {
  const navigate = useNavigate();

  return event => {
    const route = event.target.value;
    if (route) {
      navigate(route);
    }
  };
};

export default useNavRoute;
