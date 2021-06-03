import React from 'react';
import { useParams } from 'react-router-dom';
import Add from './Add';
import './Details.css';
import Edit from './Edit';
function Details() {
    var data = JSON.parse(localStorage.getItem('data'));
    const { id } = useParams();
    var tname = data[id].name;
    var tage = data[id].age;
    var tphone = data[id].phone;
    var tplace = data[id].place;
    var toccupation = data[id].occupation;
    return (
        <div className="container">
            <h1 className="mt-5 c">Tenant Details</h1>
            <div className="bor w-50 mt-5 l">
                <div className="row mt-5">
                    <div className="col  mt-3">
                        <h4>Name : </h4><br />
                        <h4>Age :</h4><br />
                        <h4>Phone No :</h4><br />
                        <h4>Occupation :</h4><br />
                        <h4>Place :</h4><br />
                    </div>
                    <div className="col  mt-3">
                       <p>{tname}</p> <br />
                       <p>{tage}</p>  <br />
                       <p>{tphone}</p> <br />
                       <p>{toccupation}</p> <br />
                       <p>{tplace}</p> <br /><br />
                    </div>
                </div>
                <div className="mt-5">
                    <div className="row justify-content-between mb-5">
                        <div className="col-2 w-25"><Edit/></div>
                        <div className="col-2 w-25"><Add/></div>
                        <div className="col-2 w-25"><button onClick={()=>{localStorage.removeItem(id);
                        alert("deleted Successfully!!");}} className=" btn btn-primary " >Remove Tenant</button></div></div>
                </div>
            </div>
        </div>
    );
}

export default Details;