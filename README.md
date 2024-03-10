# Nexus UI Components

This repo provides UI components for the Nexus web ecosystem.  


## React + TypeScript + Vite + Tailwind + Storybook  

All the UI components should be small and reusable.  
See [./lib/components/](./lib/components/)  for examples.  

The [./src/App.tsx](./src/App.tsx) can be used as a demo area for the components, but the React app is NOT published.  
This project uses the Vite Library configuration to rollup a UI lib for consumption in other web applications.  



### Quick start

To develop the components, install the dependencies and run the Storybook for realtime dev iteration.  

```
pnpm install
pnpm run storybook
```

To add styles, use the Tailwind class names.  
If you _must_ use custom styles, use CSS modules in the component's folder.   

