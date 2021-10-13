import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./UiButton.module.scss";

const UiButton = ({ text, type="submit", onClick, theme = "primary", size, classes }) => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[theme],
        styles[size],
        classes
      )}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

UiButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.string,
  size: PropTypes.string,
  classes: PropTypes.string,
};

export default UiButton;
