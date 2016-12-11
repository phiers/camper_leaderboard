import React from 'react';
import Nav from 'Nav'; // eslint-disable-line


const Main = props =>
   (
     <div>
       <Nav />
       <div className="row">
         <div className="column small-centered medium-6 large-4">
           {props.children}
         </div>
       </div>

     </div>
  );

module.exports = Main;
