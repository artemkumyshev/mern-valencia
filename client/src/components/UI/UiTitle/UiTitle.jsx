import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./UiTitle.module.scss";

const UiTitle = ({ level = 1, text, theme = "light", classes }) => {
  const Hnum = `h${level}`;

  return (
    <Hnum
      className={classNames(styles.title, styles[Hnum], styles[theme], classes)}
    >
      {text}
    </Hnum>
  );
};

UiTitle.propTypes = {
  level: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  theme: PropTypes.string,
  classes: PropTypes.string,
};

export default UiTitle;
