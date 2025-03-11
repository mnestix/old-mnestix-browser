import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Templates | Mnestix',
    description: 'A list of templates',
};

interface Props {
    children: ReactNode;
}

export default function ClientLayout({ children }: Props) {
    return children;
}
