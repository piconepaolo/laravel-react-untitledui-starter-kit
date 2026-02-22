import { usePage } from '@inertiajs/react';
import { ChevronSelectorVertical } from '@untitledui/icons';
import { Dropdown } from '@/components/base/dropdown/dropdown';
import { UserInfo } from '@/components/user-info';
import { UserMenuContent } from '@/components/user-menu-content';

export function NavUser() {
    const { auth } = usePage().props;

    return (
        <div className="px-3 py-2">
            <Dropdown.Root>
                <button
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-bg-primary_hover"
                    data-test="sidebar-menu-button"
                >
                    <UserInfo user={auth.user} />
                    <ChevronSelectorVertical className="ml-auto size-4 text-text-quaternary" />
                </button>
                <Dropdown.Popover placement="bottom end">
                    <Dropdown.Menu className="min-w-56">
                        <UserMenuContent user={auth.user} />
                    </Dropdown.Menu>
                </Dropdown.Popover>
            </Dropdown.Root>
        </div>
    );
}
