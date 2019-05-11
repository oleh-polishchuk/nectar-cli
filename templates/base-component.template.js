module.exports = (options = {}) => {
    return `\
import "./style.scss";
import React from "react";
import PropTypes from "prop-types";

const ${options.name} = () => (
    <section styleName="${options.className}">
        ${options.name} works!
    </section>
);

export default ${options.name};
`
};
