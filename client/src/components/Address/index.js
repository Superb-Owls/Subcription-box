import React from 'react';
import './layout.css';
import './style.css';

function Address(props) {


    return (
        <>
            <div className="addressWrapper">
                <div className="col1">
                    <form className="addressForm">
                        <div>
                            <label for="fname">First Name</label>
                            <input onChange={(e) => { props.handleTyping(e, props.formType) }} type="text" id="fname" name="firstname" placeholder="Your name.." />
                        </div>
                        <div>
                            <label for="lname">Last Name</label>
                            <input onChange={(e) => { props.handleTyping(e, props.formType) }} type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
                        </div>
                        <div>
                            <label for="address1">Address Line 1</label>
                            <input onChange={(e) => { props.handleTyping(e, props.formType) }} type="text" id="add1" name="address1" placeholder="Street address, P.O. box, company name, c/o"></input>
                        </div>
                        <div>
                            <label for="address2">Address Line 2</label>
                            <input onChange={(e) => { props.handleTyping(e, props.formType) }} type="text" id="add2" name="address2" placeholder="Apartment, suite , unit, building, floor, etc."></input>
                        </div>
                    </form>
                </div>
                <div className="col2">
                    <form className="addressForm">
                        <div>
                            <label for="city">City / Town</label>
                            <input onChange={(e) => { props.handleTyping(e, props.formType) }} type="text" id="city" name="city" placeholder="City or Town"></input>
                        </div>
                        <div>
                            <label for="state">State / Province / Region</label>
                            <input onChange={(e) => { props.handleTyping(e, props.formType) }} type="text" id="state" name="state" placeholder="State / Province / Region"></input>
                        </div>
                        <div>
                            <label for="zip">Zip / Postal Code</label>
                            <input onChange={(e) => { props.handleTyping(e, props.formType) }} type="text" id="zip" name="zip" placeholder="Zip or Postal Code"></input>
                        </div>
                        <div>
                            <label for="country">Country</label>
                            <select id="country" name="country">
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Address;