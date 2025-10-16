import 'react';

declare module 'react' {
  interface ViewTransitionProps {
    name: string;
    children: React.ReactNode;
  }

  export const unstable_ViewTransition: React.FC<ViewTransitionProps>;
}
