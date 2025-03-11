import type { Metadata } from 'next';
import { ReactNode } from 'react';

// add this file to every page for distinctive page titles
export const metadata: Metadata = {
    title: 'AAS List | Mnestix',
    description: 'A list of AAS',
};

interface Props {
    children: ReactNode;
}

export default function ClientLayout({ children }: Props) {
    return children;
}
