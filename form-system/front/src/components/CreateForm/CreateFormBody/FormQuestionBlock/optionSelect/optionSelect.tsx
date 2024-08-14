import { useEffect, useRef, useState } from 'react';
import './optionSelect.scss';

export type Option = {
  value: 'radio' | 'checkbox' | 'date';
  label: 'Radio Button' | 'Checkbox' | 'Date';
  selectedIcon: 'radio_button_checked' | 'check_box' | 'event';
  optionIcon: 'circle' | 'check_box_outline_blank' | 'event';
  type: 'text' | 'date';
};

interface OptSelectProps {
  options: Option[];
  onChange: (option: Option) => void;
  selectedOption: Option;
}

export const OptionSelect = ({
  options,
  onChange,
  selectedOption,
}: OptSelectProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const customSelectRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: Option) => {
    onChange(option);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        customSelectRef.current &&
        !customSelectRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  });

  return (
    <div
      className={`custom-select ${dropdownOpen ? 'open' : ''}`}
      ref={customSelectRef}
    >
      <div
        className="selected-option"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="material-symbols-outlined">
          {selectedOption.selectedIcon}
        </span>
        <p>{selectedOption.label}</p>
      </div>
      <div className="options">
        {options.map((option) => (
          <div
            key={option.value}
            className="option"
            onClick={() => handleOptionClick(option)}
          >
            <span className="material-symbols-outlined">
              {option.selectedIcon}
            </span>
            <p>{option.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
