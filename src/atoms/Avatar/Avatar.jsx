import { html } from 'lit-html'

export const Avatar = ({ 
  avatar
}) => {

  return html`
    <div class="avatar" style=${avatar && `background-image: url(${ avatar })`}>
      
    </div>

    <style>
      .avatar {
        height: 40px;
        width: 40px;
        background-position: center;
        background-size: cover;
        border-radius: 10px;
      }
    </style>
  `
}

