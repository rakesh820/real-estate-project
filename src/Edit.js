import React,{ useState } from 'react';

function Edit() {
    const [details, setdetails] = useState({
        name: "",
        age: "",
        phone: "",
        occupation: "",
   });
    let name, value;
    const edit = (event) => {
        name = event.target.name;
        value = event.target.value;
        setdetails({
            ...details, [name]: [value]
        });
    }
    const update=()=>{
        localStorage.setItem('data[0].name', JSON.stringify(details.name));
    }
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Edit Details</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Tenant Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="input">Name</label>
                                    <input type="text" onChange={edit} className="form-control"  name="name" id="input" value={details.name} placeholder="Enter name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="input">Age</label>
                                    <input type="number" onChange={edit} className="form-control" name="age" id="input" value={details.age}placeholder="Enter age" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="input">Phone</label>
                                    <input type="number" onChange={edit} className="form-control" name="phone" id="input" value={details.phone} placeholder="Enter phone number" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="input">Occupation</label>
                                    <input type="text" onChange={edit} className="form-control" name="occupation" id="input" value={details.occupation} placeholder="Enter occupation" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={update} className="btn btn-primary">Update Details</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Edit;
