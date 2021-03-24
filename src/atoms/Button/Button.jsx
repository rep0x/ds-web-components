import { html } from 'lit-html'

export const Button = ({ 
  primary, 
  backgroundColor, 
  size, 
  label, 
  onClick 
}) => {
  const mode = primary ? 'btn--primary' : 'btn--secondary'

  return html`
    <button
      type="button"
      class=${['btn', `btn--${size || 'medium'}`, mode].join(' ')}
      style=${backgroundColor && `background-color: ${ backgroundColor }`}
      @click=${onClick}
      >
      ${label}
    </button>

    <style>
      .btn {
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: 700;
        border: 0;
        border-radius: 3em;
        cursor: pointer;
        display: inline-block;
        line-height: 1;
      }
      .btn--primary {
        color: white;
        background-color: #1ea7fd;
      }
      .btn--secondary {
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      }
      .btn--small {
        font-size: 12px;
        padding: 10px 16px;
      }
      .btn--medium {
        font-size: 14px;
        padding: 11px 20px;
      }
      .btn--large {
        font-size: 16px;
        padding: 12px 24px;
      }
    </style>
  `
}

