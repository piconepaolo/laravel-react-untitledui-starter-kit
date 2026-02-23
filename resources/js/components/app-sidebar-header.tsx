import { Menu01 } from '@untitledui/icons';

import { useSidebar } from '@/components/app-shell';
import { Breadcrumbs } from '@/components/breadcrumbs';
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types';

export function AppSidebarHeader({
    breadcrumbs = [],
}: {
    breadcrumbs?: BreadcrumbItemType[];
}) {
    const { toggle } = useSidebar();

    return (
        <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border-secondary px-4">
            <div className="flex items-center gap-2">
                <button
                    onClick={toggle}
                    className="-ml-1 inline-flex size-8 items-center justify-center rounded-md text-text-tertiary transition-colors hover:bg-bg-primary_hover hover:text-text-primary"
                    aria-label="Toggle sidebar"
                >
                    <Menu01 className="size-5" />
                </button>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
        </header>
    );
}
