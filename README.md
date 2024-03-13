# Nexus UI Components

This is a component library for React + Tailwind  

Storybook -  
https://nexus-ui-components.vercel.app/  


It provides a simple way to bootstrap app development by leveraging Tailwind and TW Classed.   

Read more about TW-Classed here -  
https://github.com/sannajammeh/tw-classed  

Read more about Tailwind here -  
https://tailwindcss.com/  


## Quick start

Install the library  

```shell
npm install --save @savantly/nexus-ui-components
```

Import the default `css` variable file in your layout/index (or copy/edit your own) -  

```shell
import '@savantly/nexus-ui-components/dist/themes/nexus.css';
```

Import the color mapping in your Tailwind config -  
```tsx
/** @type {import('tailwindcss').Config} */
import { nexusThemeConfig } from "@savantly/nexus-ui-components";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: nexusThemeConfig.colors, // Add the color mapping
    },
  },
};

```


Import a component and use it -  

```tsx
import { Button } from '@savantly/nexus-ui-components';

export const Page = () => {
    return (
        <Button>Test Button</Button>
    )
};
```

## Why?  
Why another UI component library? Don't we have a zillion already?  

Yes we do =(  
But it seems I'm always looking for another one, because of various reasons.  
- license issues
- flakey integrations
- complicated customizations
- lacking features 

This library uses CSS vars to add custom colors to extend Tailwind, and the components leverage the built-in and generated classes to give a theming experience similar to Bootstrap.  

It's compatible with Next JS app routing, and it's easy to create a custom theme, or extend with existing Tailwind classes.  

The TW Classed project provides an excellent developer experience to create custom components with Tailwind.  
The properties are typed, and the "variants" system allows us to create self-explanatory components.   



## React + TypeScript + Vite + Tailwind + Storybook  

All the UI components should be small and reusable.  
See [./lib/components/](./lib/components/)  for examples.  

The [./src/App.tsx](./src/App.tsx) can be used as a demo area for the components, but the React app is NOT published.  
This project uses the Vite Library configuration to rollup a UI lib for consumption in other web applications.  


## Custom Theme

You can create a custom theme by copying the theme file and updating the color values.  

[./src/themes/nexus.css](./src/themes/nexus.css)  


### Contributing 

To develop the components, install the dependencies and run the Storybook for realtime dev iteration.  

```
pnpm install
pnpm run storybook
```

To add styles, use the Tailwind class names.  
If you _must_ use custom styles, use CSS modules in the component's folder.   

