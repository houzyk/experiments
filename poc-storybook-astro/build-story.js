import fs from "fs";

const html = fs.readFileSync("./dist/index.html", "utf-8");

const componentAsString = `export const createComponent = () => {
  const container = document.createElement('div');

  container.insertAdjacentHTML("beforeend", "${html}");

  return container;
};`

const componentStoryAsString = `import { createComponent } from './Component';

export default {
  title: 'Example/Component',
  tags: ['autodocs'],
  render: () => {
    return createComponent();
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Component = {
  args: {}
};
`

fs.writeFileSync("./src/stories/Component.js", componentAsString);
fs.writeFileSync("./src/stories/Component.stories.js", componentStoryAsString);
