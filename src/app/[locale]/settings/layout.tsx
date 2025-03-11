import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Settings | Mnestix',
    description: 'Settings',
};

interface Props {
    children: ReactNode;
}

export default function ClientLayout({ children }: Props) {
    return children;
}
