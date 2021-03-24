import { Page } from './Page'
import * as HeaderStories from '../../organisms/Header/Header.stories'

export default {
  title: '📃 📘 Pages/Page',
}

const Template = (args) => Page(args)

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
}
