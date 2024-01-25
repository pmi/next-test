import {PORTAL_COMPONENT_ATTRIBUTE} from '@enonic/nextjs-adapter';
import {Metadata} from 'next';
import {ReactNode} from 'react';

import '../styles/globals.css';


type LayoutProps = {
    children: ReactNode
}

/* RootLayout is required by Next.js */
export default async function RootLayout({children}: LayoutProps) {

    const bodyAttrs: { [key: string]: string } = {
        className: "edit",
        [PORTAL_COMPONENT_ATTRIBUTE]: "page"
    };

    return (
        <html lang="en">
        <body {...bodyAttrs}>{children}</body>
        </html>
    );
}

export const metadata: Metadata = {
    title: 'Next.XP',
    description: 'The React Framework for Enonic XP',
}
