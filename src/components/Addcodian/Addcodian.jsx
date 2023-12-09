import React from 'react';
import {accdata} from './Api.jsx'
import Addcodiancard from './Addcodiancard.jsx';

const Addcodian = () => {
   
    return (
        <div className='w-11/12 lg:max-w-7xl m-auto'>
         {accdata.map((d,t)=><Addcodiancard key={t} {...d}></Addcodiancard>)}
          
        </div>
    );
};

export default Addcodian;