import { MdSearch } from "react-icons/md";

export default function AddUser() {

    return (
        <div className="form-container">
           <form className="add-form" autocomplete="off">
            <input className="add-input-form" type="text" autocomplete="off" name="firstname" placeholder="First Name ..." required/>
            <input className="add-input-form" type="text" name="midname" placeholder="Middle Name ..." required/>
            <input className="add-input-form" type="text" name="lastname" placeholder="Last Name ..." required/>
            <input className="add-input-form" type="email" name="username" placeholder="Username ..." required/>
            <input className="add-input-form" type="tel" name="phone" placeholder="Phone Number ..." required/>
            <input className="add-input-form" type="date" name="birthdate" placeholder="Birth Date ..." required/>
            <select className="add-input-form" name="gender">
           <option selected disabled>Gender</option>
           <option>Male</option>
            <option>Female</option>
           </select>
           <select name="role" className="add-input-form">
           <option selected disabled>Role</option>
            <option>User</option>
            <option>Administrator</option>
            <option>Publisher</option>
           </select>
           <select className="add-input-form" name="status">
           <option selected disabled>Status</option>
           <option>Active</option>
            <option>Locked</option>
            <option>Disabled</option>
           </select>
            <div className="button-form">
            <button className="add-button-form">Save</button>
            </div>
            <div className="error">This is Error Message Area</div>
            </form> 
        </div>
    );

}
