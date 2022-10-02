import React from "react";
import PropTypes from 'prop-types';
import {getImageUrlForDataTable} from "../../utils/helpers";

import styles from "./index.module.scss";

function Image({ row }) {
    return (
        <div className={styles.Image}>
           <img src={getImageUrlForDataTable(row)}  alt="pokemon" />
        </div>
    );
}

Image.propTypes = {
    row: PropTypes.object.isRequired,
};

export default Image;

