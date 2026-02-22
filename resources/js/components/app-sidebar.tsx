import { Link } from '@inertiajs/react';
import { BookOpen01, Folder, Grid01 } from '@untitledui/icons';
import { useSidebar } from '@/components/app-shell';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { cx } from '@/lib/utils';
import type { NavItem } from '@/types';
import AppLogo from './app-logo';
import { dashboard } from '@/routes';

const mainNavItems: NavItem[] = [
    { title: 'Dashboard', href: dashboard(), icon: Grid01 },
];

const footerNavItems: NavItem[] = [
    { title: 'Repository', href: 'https://github.com/laravel/react-starter-kit', icon: Folder },
    { title: 'Documentation', href: 'https://laravel.com/docs/starter-kits#react', icon: BookOpen01 },
];

export function AppSidebar() {
    const { isOpen, isMobile, setOpen } = useSidebar();

    return (
        <>
            {/* Mobile overlay */}
            {isMobile && isOpen && (
                <div className="fixed inset-0 z-40 bg-gray-950/60" onClick={() => setOpen(false)} />
            )}

            <aside
                className={cx(
                    'fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border-secondary bg-bg-primary transition-transform duration-200 ease-in-out lg:relative lg:z-auto lg:translate-x-0',
                    isOpen ? 'translate-x-0' : '-translate-x-full',
                )}
            >
                <div className="flex h-16 shrink-0 items-center px-4">
                    <Link href={dashboard()} prefetch className="flex items-center gap-2">
                        <AppLogo />
                    </Link>
                </div>

                <div className="flex-1 overflow-y-auto">
                    <NavMain items={mainNavItems} />
                </div>

                <div className="shrink-0 border-t border-border-secondary">
                    <NavFooter items={footerNavItems} className="mt-auto" />
                    <NavUser />
                </div>
            </aside>
        </>
    );
}
