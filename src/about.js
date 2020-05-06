import React, { Component } from 'react'
import './about.css'
export default class about extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="about">
               <h1 >?מי אנחנו </h1>
               <p>אנחנו צוות מקצועי</p>
               <p>אנחנו צוות מקצועי</p>
               <p>אנחנו צוות מקצועי</p>
               <p>אנחנו צוות מקצועי</p>
               <p>אנחנו צוות מקצועי</p>
            </div>
            <div className="about-box">
            <form className="about-form">
                <h1>צור קשר</h1>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
 </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit">Send</button>
</form>
            </div>
            </React.Fragment>
        )
    }
}