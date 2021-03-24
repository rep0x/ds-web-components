import { html } from 'lit-html'
import { Avatar } from '../../atoms/Avatar/Avatar'

export const UserInfo = ({ 
  avatar = 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  name = 'John',
  title = 'Designer'
}) => {

  return html`
    <user-info>
      ${Avatar({
        avatar: avatar
      })}
      <div class="user-info-wrapper">
        <span class="name">${name}</span>
        <span class="title">${title}</span>
      </div>
    </user-info>

    <style>
      user-info {
        
      }

      .user-info-wrapper {

      }

      .name {

      }

      .title {

      }
    </style>
  `
}

