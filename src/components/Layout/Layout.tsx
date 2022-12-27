import React, { ReactElement } from 'react';
import './Layout.scss';

export interface LayoutProps {
  name: string;
}

const Layout = (props: LayoutProps): ReactElement => {
  return <p>{props.name}</p>;
};

export default Layout;
