import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { color } from 'framer-motion';
import {Link} from 'react-router-dom';

function Homepagebtn() {
  return (
    <div><Link to='/aboutcon'><button
  type="button"
  className="btn d-inline-flex align-items-center gap-2 fw-semibold rounded-pill px-4 py-2 px-md-5 py-md-3 px-lg-5 py-lg-3"
  style={{  
    backgroundColor: '#141E46',
    borderColor: '#141E46',
    color: '#fff',
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.backgroundColor = '#ffffffff';
    e.currentTarget.style.color = '#141E46';
  }}
  onMouseOut={(e) =>{
     e.currentTarget.style.backgroundColor = '#141E46';
      e.currentTarget.style.color="#fff"
  }}
>
  Get Started
  <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
</button></Link>
</div>
  )
}

export default Homepagebtn