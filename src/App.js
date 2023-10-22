import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

const App = () => {
  useEffect(() => {
    const cookieOptions = {
      expires: 7,
      domain: '.azurestaticapps.net', // Replace with your desired domain
    };
    Cookies.set('username', 'john_doe', cookieOptions);

    // Get and use the cookie
    const username = Cookies.get('username');
    console.log(`Username: ${username}`);
  }, []);

  return (
    <div>
      <p>{process.env.REACT_APP_NOT_SECRET_CODE}</p>
    </div>
  );
};

export default App;
