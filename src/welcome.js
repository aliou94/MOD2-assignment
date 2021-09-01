import React from 'react'
export function Welcome1(props) {
    return <p>Hello, {props.fname} </p>;
}

export function Welcome2(props) {
    return <p>Hello, {props.fname} </p>;
}

export function Sidebar() {
    return (
        <div className='sidebar'>
            <p>Dashboard</p>
            <p>Widget</p>
            <p>Reviews</p>
            <p>Customers</p>
            <p>Online Analysis</p>
            <p>Settings</p>
        </div>
    );
}
export function Smallbox(props) {
    return (
        <div className='small-box'>
            <p>{props.title}</p>
            <h3>{props.data1}</h3>
            <h3>{props.data2}</h3>
            <h3>{props.data3}</h3>
        </div>
    );
}
export function Maincontent(props) {
    return (
        <div className='main-content'>
            <p>{props.title}</p>
            <h3>{props.data}</h3>
        </div>
    );
}