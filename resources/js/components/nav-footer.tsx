import { toUrl } from '@/lib/utils';
import type { NavItem } from '@/types';

export function NavFooter({
    items,
    className,
}: {
    items: NavItem[];
    className?: string;
}) {
    return (
        <div className={className}>
            <div className="space-y-1 px-3">
                {items.map((item) => (
                    <a
                        key={item.title}
                        href={toUrl(item.href)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-text-tertiary transition-colors hover:bg-bg-primary_hover hover:text-text-primary"
                    >
                        {item.icon && <item.icon className="size-5" />}
                        <span>{item.title}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
