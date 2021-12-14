import React from 'react';

const Header = () => {
  return <header className="border-b border-gray-300 py-6 bg-white">
      <div className="container mx-auto max-w-screen-lg">
          <p className="font-semibold text-lg text-center">Bedu SWAG</p>
          <div>
              <ul className="flex">
                  <li className="mr-2">
                      <a href="/signup" className="text-sm px-4 py-2 rounded bg-purple-600">Sign UP</a>                      
                  </li>
                  <li className="mr-2">
                      <a href="/" className="text-sm px-4 py-2 rounded bg-white hover:bg-gray">Login</a>                      
                  </li>
                  {/*<li>
                    <span className="text-sm pl-4 py-2">Bienvenido, Javier Diaz</spam>
                  </li>*/}
              </ul>
          </div>

      </div>

  </header>
}

export default Header;
