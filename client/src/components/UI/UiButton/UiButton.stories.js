import UiButton from "./UiButton";

export default {
  title: "Ui-Kit/UiButton",
  component: UiButton,
};

const Template = (args) => <UiButton {...args} />;

const props = {
  text: "Нажми на кнопку",
  onClick: () => console.log("Нажал"),
  theme: "primary",
  size: "",
  classes: "",
};

export const Primary = Template.bind({});
Primary.args = {
  ...props,
  theme: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...props,
  theme: "secondary",
};

export const Success = Template.bind({});
Success.args = {
  ...props,
  theme: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  ...props,
  theme: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
  ...props,
  theme: "warning",
};

export const Info = Template.bind({});
Info.args = {
  ...props,
  theme: "info",
};

export const Light = Template.bind({});
Light.args = {
  ...props,
  theme: "light",
};

export const Dark = Template.bind({});
Dark.args = {
  ...props,
  theme: "dark",
};

export const Link = Template.bind({});
Link.args = {
  ...props,
  theme: "link",
};

export const LG = Template.bind({});
LG.args = {
  ...props,
  size: "lg",
};

export const SM = Template.bind({});
SM.args = {
  ...props,
  size: "sm",
};
