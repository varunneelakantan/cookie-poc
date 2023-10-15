import React, { useEffect } from 'react';
import Cookies from '';

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
      {/* Your component JSX */}
    </div>
  );
};

export default App;
