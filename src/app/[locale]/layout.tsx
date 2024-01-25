import {I18n} from '@enonic/nextjs-adapter';
import {Metadata} from 'next';
import {ReactNode} from 'react';

import {PageProps} from './[[...contentPath]]/page';

export type LayoutProps = {
    params: PageProps
    children: ReactNode
}

export default async function RootLayout({params, children}: LayoutProps) {

    // we only have locale in the params on the [locale] level
    await I18n.setLocale(params.locale);

    return (<>{children}</>);
}

export const metadata: Metadata = {
    title: {
        default: I18n.localize('title'),
        template: '%s | Next.XP',
    },
    description: 'The React Framework for Enonic XP',
}
