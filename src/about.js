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
            <form className="about-form" action="mailto:yoad.gadot@gmail.com" method="post" enctype="text/plain">
  <div className="form-group">
    <label className="label-form">כתובת מייל</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label className="label-form">פנייה בנושא</label>
    <select name="title" title="title" className="form-control" id="exampleFormControlSelect1">
      <option>בעיה</option>
      <option>בעיה</option>
      <option>אחר</option>
      <option>אחר</option>
      <option>אחר</option>
    </select>
  </div>
  <div class="form-group">
    <label  className="label-form">הערות</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit">Submit</button>
</form>
            </div>
            </React.Fragment>
        )
    }
}