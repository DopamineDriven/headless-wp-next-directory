import { ReactNode } from 'react';

type Props = {
	preview?: boolean;
	children: ReactNode;
};

export default function Layout({ children }: Props) {
	return (
		<>
			<div className='min-h-screen'>
				<main>{children}</main>
			</div>
		</>
	);
}

/*
import React, { ComponentType } from "react"
import Layout from "../components/Layout/Layout"

function withLayout<T>(WrappedComponent: ComponentType<T>) {
  return function ComponentWithLayout(props: T) {
    return (
      <Layout>
        <WrappedComponent {...props} />
      </Layout>
    )
  }
}

export default withLayout
*/
