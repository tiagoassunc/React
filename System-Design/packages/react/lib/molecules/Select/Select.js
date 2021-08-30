import React, { useState, useRef, useEffect } from 'react';
import Text from '../../atoms/Text/Text.js';

const Select = ({ options = [], label = "Please select an option...", onOptionSelected: handler, renderOption, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const labelRef = useRef(null);
    const [overlayTop, setOverlayTop] = useState(0);
    const onOptionSelected = (option, optionIndex) => {
        if (handler) {
            handler(option, optionIndex);
        }
        setSelectedIndex(optionIndex);
        setIsOpen(false);
    };
    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
    }, [labelRef.current?.offsetHeight]);
    let selectedOption = null;
    if (selectedIndex !== null) {
        selectedOption = options[selectedIndex];
    }
    return (React.createElement("div", { className: "dse-select" },
        React.createElement("button", { ref: labelRef, className: "dse-select__label", onClick: () => onLabelClick() },
            React.createElement(Text, null, selectedIndex === null ? label : selectedOption?.label),
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "1rem", width: "1rem", fill: "currentColor", className: `dse-select__caret ${isOpen ? "dse-select__caret--open" : "dse-select__caret--closed"}`, viewBox: "0 0 20 20" },
                React.createElement("path", { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" }))),
        isOpen ? (React.createElement("ul", { style: { top: overlayTop }, className: "dse-select__overlay" }, options.map((option, optionIndex) => {
            const isSelected = selectedIndex === optionIndex;
            const renderOptionProps = {
                option,
                isSelected,
                getOptionRecommendedProps: (overrideProps = {}) => {
                    return {
                        className: `dse-select__option ${isSelected ? "dse-select__option--selected" : ""} `,
                        key: option.value,
                        onClick: () => onOptionSelected(option, optionIndex),
                        ...overrideProps,
                    };
                },
            };
            if (renderOption) {
                return renderOption(renderOptionProps);
            }
            return (React.createElement("li", { className: `dse-select__option ${isSelected ? "dse-select__option--selected" : ""} `, onClick: () => onOptionSelected(option, optionIndex), key: option.value },
                React.createElement(Text, null, option.label),
                isSelected ? (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", height: "1rem", width: "1rem" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }))) : null));
        }))) : null));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
