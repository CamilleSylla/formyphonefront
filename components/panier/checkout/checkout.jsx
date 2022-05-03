import style from './checkout.module.scss'
// import Strapi from "strapi-sdk-javascript/build/main";
import router from "next/router";
import { useState } from 'react';

import { CardElement } from "@stripe/react-stripe-js";


export default function Checkout (props) {

    return (
        <div>
      <div>
        <label htmlFor="card-element">Informations banquaires</label>

        <div>
          <fieldset style={{ border: "none" }}>
            <div className="form-row">
              <div id="card-element" style={{ width: "100%", minHeight : "20vh" }}>
                <CardElement
                />
              </div>
              <br />
              <div className="order-button-wrapper">
                <button onClick={props.submitOrder}>Confirm order</button>
              </div>
              {props.stripeError ? (
                <div>{props.stripeError.toString()}</div>
              ) : null}
              <div id="card-errors" role="alert" />
            </div>
          </fieldset>
        </div>
      </div>
      <style jsx>
        {`
          .order-button-wrapper {
            display: flex;
            width: 100%;
            align-items: flex-end;
            justify-content: flex-end;
          }
        `}
      </style>
    </div>
    )
}