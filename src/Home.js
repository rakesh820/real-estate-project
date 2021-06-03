import React from 'react';
import './Home.css';
import { Tenants } from './Tenants';
import {Link} from 'react-router-dom';

function Home() { 
    return (   
            <div className="container">
                <h1 className="mt-5 c">List of Properties</h1>
                <div className="row j mt-4 r">
                    {Tenants.map(a => {
                        return (
                            <div key={a.id} className="col-4 mt-3 ">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={a.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title mb-3">{a.place}</h5>
                                    <Link  to={'/Details/'+a.id} className="btn btn-primary">Tenant Details</Link>
                                </div>
            
                            </div>
                            
                            </div>
                            
                        );
                    })}
                   
                </div>
            </div>
    );
}

export default Home;