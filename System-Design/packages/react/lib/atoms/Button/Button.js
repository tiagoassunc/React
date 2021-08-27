import React from 'react';

const Button = ({ label }) => {
    return (React.createElement("button", { className: "dse-button-container" },
        label || "Button",
        " - Label here"));
};

export { Button as default };
//# sourceMappingURL=Button.js.map
