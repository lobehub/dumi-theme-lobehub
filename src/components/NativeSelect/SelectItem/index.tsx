import { cx } from 'antd-style';
import { ForwardedRef, forwardRef } from 'react';

import { styles } from './style';

interface SelectItemProps {
  disabled?: boolean;
  isActive?: boolean;
  isSelected?: boolean;
  label: any;
  ref?: ForwardedRef<HTMLButtonElement>;
  value: any;
}

const SelectItem = forwardRef<any, SelectItemProps>(
  ({ value, label, isSelected, isActive, disabled, ...props }, reference) => {
    return (
      <button
        aria-selected={isSelected}
        className={cx(styles.item, {
          [styles.selected]: isSelected,
          [styles.active]: isActive,
        })}
        disabled={disabled}
        key={value}
        ref={reference}
        role="option"
        tabIndex={-1}
        type={'button'}
        {...props}
      >
        {label}
      </button>
    );
  },
);

export default SelectItem;
