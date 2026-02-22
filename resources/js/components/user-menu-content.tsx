import { router } from '@inertiajs/react';
import { LogOut01, Settings01 } from '@untitledui/icons';
import { Dropdown } from '@/components/base/dropdown/dropdown';
import { UserInfo } from '@/components/user-info';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { toUrl } from '@/lib/utils';
import type { User } from '@/types';
import { logout } from '@/routes';
import { edit } from '@/routes/profile';

type Props = { user: User };

export function UserMenuContent({ user }: Props) {
    const cleanup = useMobileNavigation();

    return (
        <>
            <div className="flex items-center gap-2 px-3 py-2 text-left text-sm">
                <UserInfo user={user} showEmail={true} />
            </div>
            <Dropdown.Separator />
            <Dropdown.Item
                label="Settings"
                icon={Settings01}
                onAction={() => {
                    cleanup();
                    router.visit(toUrl(edit()));
                }}
            />
            <Dropdown.Separator />
            <Dropdown.Item
                label="Log out"
                icon={LogOut01}
                data-test="logout-button"
                onAction={() => {
                    cleanup();
                    router.flushAll();
                    router.post(toUrl(logout()));
                }}
            />
        </>
    );
}
