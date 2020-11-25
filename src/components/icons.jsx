import React from 'react';
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { ImBrightnessContrast } from "react-icons/im";

/*
* THIS IS NECESSARY TO MAKE THE TOOLTIP WORK WITH CUSTOM CHILD ELEMENTS
* https://material-ui.com/components/tooltips/
* ignore the react strict mode warning in the console - it doesn't apply here
*/

export const ThemeToggle = React.forwardRef(function ThemeToggle(props, ref) {
  return (
    <span {...props} ref={ref}>
      <ImBrightnessContrast />
    </span>
  )
});
export const Mail = React.forwardRef(function Mail(props, ref) {
  return (
    <span {...props} ref={ref}>
      <AiOutlineMail />
    </span>
  )
});
export const Insta = React.forwardRef(function Insta(props, ref) {
  return (
    <span {...props} ref={ref}>
      <AiOutlineInstagram />
    </span>
  )
});