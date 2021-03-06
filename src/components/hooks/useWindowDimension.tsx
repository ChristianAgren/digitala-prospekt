import { useState, useEffect } from 'react';

function getWindowDimension() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimension() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimension());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimension());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowDimension;
