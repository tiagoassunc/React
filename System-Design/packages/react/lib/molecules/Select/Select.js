import React, { useState, useRef, useEffect } from 'react';

const Select = ({ options = [], label = "Please select an option...", onOptionSelected: handler, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const labelRef = useRef(null);
    const [overlayTop, setOverlayTop] = useState(0);
    const onOptionSelected = (option, optionIndex) => {
        if (handler) {
            handler(option, optionIndex);
        }
    };
    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
    }, [labelRef.current?.offsetHeight]);
    return (React.createElement("div", { className: "dse-select" },
        React.createElement("button", { ref: labelRef, className: "dse-select__label", onClick: () => onLabelClick() },
            React.createElement("span", null, label),
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1rem", width: "1rem", fill: "currentColor", className: "h-5 w-5", viewBox: "0 0 20 20" },
                React.createElement("path", { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" }))),
        isOpen ? (React.createElement("ul", { style: { top: overlayTop }, className: "dse-select__overlay" }, options.map((option, optionIndex) => {
            return (React.createElement("li", { onClick: () => onOptionSelected(option, optionIndex), key: option.value }, option.label));
        }))) : null,
        React.createElement("p", null, "This is some text")));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
