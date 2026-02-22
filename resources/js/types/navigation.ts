import type { InertiaLinkProps } from '@inertiajs/react';
import type { ComponentType, SVGAttributes } from 'react';

export type BreadcrumbItem = {
    title: string;
    href: string;
};

export type NavItem = {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: ComponentType<SVGAttributes<SVGElement>> | null;
    isActive?: boolean;
};
