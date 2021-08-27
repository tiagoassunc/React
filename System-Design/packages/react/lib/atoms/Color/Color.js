import React from 'react';
import Spacing from '../../foundation/Spacing.js';

const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm, }) => {
    const className = `dse-width-${width} dse-height-${height}`;
    return React.createElement("div", { className: className, style: { backgroundColor: hexCode } });
};

export { Color as default };
//# sourceMappingURL=Color.js.map
