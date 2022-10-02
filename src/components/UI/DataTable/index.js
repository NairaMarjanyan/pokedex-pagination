import React from "react";
import DataTables from "react-data-table-component";
import PropTypes from 'prop-types';

import styles from "./index.module.scss";

function DataTable({ data, columns }) {
    return (
        <div className={styles.DataTableContainer}>
            <DataTables
                columns={columns}
                data={data}
                pagination
                noDataComponent={null}
            />
        </div>
    );
}

DataTable.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired
};

export default DataTable;

