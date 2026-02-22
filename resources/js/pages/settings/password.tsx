import { Transition } from '@headlessui/react';
import { Form, Head } from '@inertiajs/react';
import { useRef } from 'react';
import { Button } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';
import Heading from '@/components/heading';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import type { BreadcrumbItem } from '@/types';
import PasswordController from '@/actions/App/Http/Controllers/Settings/PasswordController';
import { edit } from '@/routes/user-password';

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Password settings', href: edit().url }];

export default function Password() {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Password settings" />
            <h1 className="sr-only">Password Settings</h1>
            <SettingsLayout>
                <div className="space-y-6">
                    <Heading variant="small" title="Update password" description="Ensure your account is using a long, random password to stay secure" />
                    <Form
                        {...PasswordController.update.form()}
                        options={{ preserveScroll: true }}
                        resetOnError={['password', 'password_confirmation', 'current_password']}
                        resetOnSuccess
                        onError={(errors) => {
                            if (errors.password) passwordInput.current?.focus();
                            if (errors.current_password) currentPasswordInput.current?.focus();
                        }}
                        className="space-y-6"
                    >
                        {({ errors, processing, recentlySuccessful }) => (
                            <>
                                <Input ref={currentPasswordInput} name="current_password" type="password" label="Current password" autoComplete="current-password" placeholder="Current password" isInvalid={!!errors.current_password} hint={errors.current_password} />
                                <Input ref={passwordInput} name="password" type="password" label="New password" autoComplete="new-password" placeholder="New password" isInvalid={!!errors.password} hint={errors.password} />
                                <Input name="password_confirmation" type="password" label="Confirm password" autoComplete="new-password" placeholder="Confirm password" isInvalid={!!errors.password_confirmation} hint={errors.password_confirmation} />
                                <div className="flex items-center gap-4">
                                    <Button type="submit" isDisabled={processing} data-test="update-password-button">Save password</Button>
                                    <Transition show={recentlySuccessful} enter="transition ease-in-out" enterFrom="opacity-0" leave="transition ease-in-out" leaveTo="opacity-0">
                                        <p className="text-sm text-text-tertiary">Saved</p>
                                    </Transition>
                                </div>
                            </>
                        )}
                    </Form>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
