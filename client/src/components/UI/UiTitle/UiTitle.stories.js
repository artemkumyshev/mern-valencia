import UiTitle from "./UiTitle";

export default {
  title: "Ui-Kit/UiTitle",
  component: UiTitle,
};

const Template = (args) => <UiTitle {...args} />;

const props = {
  level: 1,
  text: "Заголовок",
  theme: "light",
  classes: "",
};

export const H1 = Template.bind({});
H1.args = {
  ...props,
  level: 1,
};

export const H2 = Template.bind({});
H2.args = {
  ...props,
  level: 2,
};

export const H3 = Template.bind({});
H3.args = {
  ...props,
  level: 3,
};

export const H4 = Template.bind({});
H4.args = {
  ...props,
  level: 4,
};

export const H5 = Template.bind({});
H5.args = {
  ...props,
  level: 5,
};

export const H6 = Template.bind({});
H6.args = {
  ...props,
  level: 6,
};

export const Dark = Template.bind({});
Dark.args = {
  ...props,
  theme: "dark",
};
