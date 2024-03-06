"use client";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

export default function AddUser() {
    const [message, setMessage] = useState('');
    const onsubmit = async (data) => {
        const user = {
            firstname: data.get('firstname'),
            midname: data.get('midname'),
            lastname: data.get('lastname'),
            username: data.get('username'),
            phone: data.get('phone'),
            birthdate: `${data.get('birthdate')}T00:00:00.000Z`,
            gender: data.get('gender'),
            role: data.get('role'),
            status: data.get('status'),
        };

        const result = await createUsers(user);
        setMessage(() => result);
        return;
    }
    return (
        <div className="form-container">
            <form action={onsubmit} className="add-form" autocomplete="off">
                <input className="add-input-form" type="text" autocomplete="off"
                    name="firstname" placeholder="First Name ..." required minLength="2"
                    maxLength="15" pattern="[a-zA-Z]+" title="Name should be only A-Z characters." />
                <input className="add-input-form" type="text" name="midname"
                    placeholder="Middle Name ..." required minLength="2" maxLength="15"
                    pattern="[a-zA-Z]+" title="Name should be only A-Z characters." />
                <input className="add-input-form" type="text" name="lastname"
                    placeholder="Last Name ..." required minLength="2" maxLength="15"
                    pattern="[a-zA-Z]+" title="Name should be only A-Z characters." />
                <input className="add-input-form" type="email" name="username"
                    placeholder="Username ..." required minLength="7" maxLength="30"
                    pattern="[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+"
                    title="Enter a valid email-like pattern" />
                <input className="add-input-form" type="tel" name="phone"
                    placeholder="Phone Number ..." required minLength="10" maxLength="13"
                    pattern="[0-9]{10}" title="Enter a valid phone number 10 digits)" />
                <input className="add-input-form" type="date" name="birthdate"
                    placeholder="Birth Date ..." required min="1970" max="2024-01-09" />
                <select className="add-input-form" name="gender" required>
                    <option selected disabled>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <select name="role" className="add-input-form" required>
                    <option selected disabled>Role</option>
                    <option>User</option>
                    <option>Administrator</option>
                    <option>Publisher</option>
                </select>
                <select className="add-input-form" name="status" required>
                    <option selected disabled>Status</option>
                    <option>Active</option>
                    <option>Locked</option>
                    <option>Disabled</option>
                </select>
                <div className="button-form">
                    <button className="add-button-form" type="submit">Save</button>
                </div>
                <div className="error">{message}</div>
            </form>
        </div>
    );

}

const createUsers = async (user) => {
    console.log(user);
    let message = '';
    try {
        const response = await fetch(`/api/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        console.log(response);
        if (response.ok) {
            const result = await response.json();
            return result.message;
        } else {
            return "Invalid response";
        }
    } catch (error) {
        return `An error occurred ${error.message}`;
    }
};
