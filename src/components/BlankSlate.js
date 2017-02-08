import React from 'react';

const BlankSlate = (props) => (
  <div className="blank-slate">
    <div className="empty">
      <i className={props.iconName} aria-hidden="true"></i>
      <p className="empty-title">{props.title}</p>
      <p className="empty-meta">{props.meta}</p>
      { props.children }
    </div>
  </div>
)

export default BlankSlate;
