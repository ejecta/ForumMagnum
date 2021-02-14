import { registerComponent } from '../../lib/vulcan-lib';
import React from 'react';

const styles = (theme: ThemeType): JssStyles => ({
  spinner: {
    height: 10,
    maxWidth: 100,
    textAlign: "center",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  
    "& div": {
      width: 10,
      height: 10,
      backgroundColor: "rgba(0,0,0,0.55)",
  
      borderRadius: "100%",
      display: "inline-block",
      "-webkit-animation": "sk-bouncedelay 1.4s infinite ease-in-out both",
      animation: "sk-bouncedelay 1.4s infinite ease-in-out both",
    },
  },
  bounce1: {
    animationDelay: "-0.32s !important",
    marginRight: 5,
  },

  bounce2: {
    animationDelay: "-0.16s !important",
    marginRight: 5,
  },
  bounce3: {
    marginRight: 0,
  },
  
  "@keyframes sk-bouncedelay": {
    "0%, 80%, 100%": {
      transform: "scale(0)",
    },
    "40%": {
      transform: "scale(1.0)"
    }
  }
});

const Loading = ({classes}: {classes: ClassesType}) => {
  return (
    <div className={`${classes.spinner}`}>
      <div className={classes.bounce1}></div>
      <div className={classes.bounce2}></div>
      <div className={classes.bounce3}></div>
    </div>
  );
};

const LoadingComponent = registerComponent('Loading', Loading, {styles});

declare global {
  interface ComponentTypes {
    Loading: typeof LoadingComponent
  }
}

export default Loading;