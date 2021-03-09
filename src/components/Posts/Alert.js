import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert, user }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [user]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
