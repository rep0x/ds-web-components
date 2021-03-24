import { UserInfo } from './UserInfo'

export default {
  title: '🌱 Molecules/UserInfo',
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
}

const Template = (args) => UserInfo(args)

export const Primary = Template.bind({})
Primary.args = {

}