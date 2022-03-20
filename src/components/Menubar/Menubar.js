import React from 'react';
import './Menubar.css'

const Menubar = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        logo
                    </div>
                    <div className="col-md-10 menu-container d-flex justify-content-end">
                      
                            <li className='items me-4'>Home</li>
                            <li className='items me-4'>Contact</li>
                            <li className='items me-4'>Cart</li> 
                            <li className='items me-4'>login</li>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;