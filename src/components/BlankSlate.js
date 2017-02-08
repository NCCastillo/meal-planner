import React from 'react';
import { Link } from 'react-router';

const BlankSlate = (props) => (
  <div className="blank-slate">
    <div className="empty">
      <i className={props.iconName} aria-hidden="true"></i>
      <p className="empty-title">{props.title}</p>
      <p className="empty-meta">{props.meta}</p>
      <Link to={props.linkTo} className="empty-action btn btn-primary"> 
        Start
      </Link>
    </div>
  </div>
)

export default BlankSlate;
