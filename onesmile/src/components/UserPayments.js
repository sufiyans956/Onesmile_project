import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';
export default function UserPayments() {
    const [payments, setpayments] = useState([]);
    
    const uid=Cookies.get("usersetid");
    console.log(uid);
    useEffect(() => {
      axios
        .get("http://localhost:8087/payments/allpayments")
        .then((response) => {
          console.log(response.data);
          setpayments(response.data); // Set fetched data to state
        })
        .catch((error) => {
          console.error("Error fetching examinations:", error);
        });
  
        console.log(payments);
    }, []);
    // const user = {

    //     payment_id : payments.paymentId,
    //     payStatus: payments.payStatus,
    //     charges: payments.charges,
    //     // notes: payments.notes,
    //     // uid: payments.appointments.usertable.uid


    // }
  return (
    <div className="container mt-3">
    <h3>Payment Details</h3>
    <div className="row">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Payment Id</th>
            <th scope="col">Charges</th>
            <th scope="col">Status</th>
            <th scope="col">Examination Id</th>
        </tr>
        </thead>
        <tbody>
        {payments.map((ex) => {
                            if (ex.examinations.appointments.usertable.uid == uid) {
                                return (
                                    <tr>
                                        <td>{ex.paymentId}</td>
                                        <td>{ex.charges}</td>
                                        <td>{ex.payStatus}</td>
                                        <td>{ex.examinations.eid}</td>
                                    </tr>
                                );
                            } else {
                                return null; // If uid doesn't match, render nothing
                            }
                        })}
        </tbody>
      </table>
    </div>
  </div>
);
}