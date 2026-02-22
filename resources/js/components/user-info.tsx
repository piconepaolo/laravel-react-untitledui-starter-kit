import { Avatar } from '@/components/base/avatar/avatar';
import { useInitials } from '@/hooks/use-initials';
import type { User } from '@/types';

export function UserInfo({ user, showEmail = false }: { user: User; showEmail?: boolean }) {
    const getInitials = useInitials();
    return (
        <>
            <Avatar size="sm" src={user.avatar} alt={user.name} initials={getInitials(user.name)} />
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                {showEmail && <span className="truncate text-xs text-text-tertiary">{user.email}</span>}
            </div>
        </>
    );
}
