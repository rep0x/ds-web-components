import { Avatar } from './Avatar'

export default {
  title: '💧 Atoms/Avatar',
  argTypes: {
    avatar: { control: 'text' },
    rounded: { control: 'boolean' }
  },
}

const Template = (args) => Avatar(args)

export const Primary = Template.bind({})
Primary.args = {
  avatar: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  rounded: true,
}