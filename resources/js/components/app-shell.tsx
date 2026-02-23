import { usePage } from '@inertiajs/react';
import {
    createContext,
    useCallback,
    useContext,
    useState,
    type ReactNode,
} from 'react';

import { useIsMobile } from '@/hooks/use-mobile';

type SidebarContextType = {
    isOpen: boolean;
    isMobile: boolean;
    toggle: () => void;
    setOpen: (open: boolean) => void;
};

const SidebarContext = createContext<SidebarContextType>({
    isOpen: true,
    isMobile: false,
    toggle: () => {},
    setOpen: () => {},
});

export function useSidebar() {
    return useContext(SidebarContext);
}

type Props = { children: ReactNode; variant?: 'header' | 'sidebar' };

export function AppShell({ children, variant = 'header' }: Props) {
    const isDefaultOpen = usePage().props.sidebarOpen;
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = useState(isDefaultOpen ?? true);

    const toggle = useCallback(() => {
        setIsOpen((prev) => {
            const next = !prev;
            document.cookie = `sidebar_state=${next ? 'true' : 'false'};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
            return next;
        });
    }, []);

    const setOpen = useCallback((open: boolean) => {
        setIsOpen(open);
        document.cookie = `sidebar_state=${open ? 'true' : 'false'};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
    }, []);

    if (variant === 'header') {
        return (
            <div className="flex min-h-screen w-full flex-col">{children}</div>
        );
    }

    return (
        <SidebarContext.Provider
            value={{
                isOpen: isMobile ? false : isOpen,
                isMobile,
                toggle,
                setOpen,
            }}
        >
            <div className="flex min-h-screen w-full">{children}</div>
        </SidebarContext.Provider>
    );
}
