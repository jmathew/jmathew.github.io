import * as React from 'react';

export const App = (props: {}) => {
  return (
    <div className="box">
      <div className="identity">
        <div className="name">Jeff Mathew</div>
        <div className="title">Contract Software Developer</div>
        <div className="contact"><a className="link" href="mailto:jeff@jeffmathew.com" target="_blank">jeff@jeffmathew.com</a></div>
      </div>
      <div className="blurb">
        <div>Full stack developer building</div>
        <div><span className="quality-highlight">dynamic</span> <span className="build-highlight">apps</span> and <span className="build-highlight">websites</span></div>
        <div>powered by <span className="quality-highlight">reusable</span> <span className="build-highlight">APIs</span>.</div>
      </div>
    </div>
  );
}
