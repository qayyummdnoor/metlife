import React from 'react';
import './button.css';
import { Icon } from './Button.stories';
import { FaBeer } from "react-icons/fa";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * /**
   * Is this the principal call to action on the page?
   */
  icon?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   *  /**
   * What background color to use
   */
  fontColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  icon = false, 
  size = 'medium',
  backgroundColor,
  fontColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {icon ? <FaBeer /> : label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
