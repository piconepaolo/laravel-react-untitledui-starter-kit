import { Transition } from '@headlessui/react';
import { Form, Head, Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';
import DeleteUser from '@/components/delete-user';
import Heading from '@/components/heading';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import type { BreadcrumbItem } from '@/types';
import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
import { edit } from '@/routes/profile';
import { send } from '@/routes/verification';

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Profile settings', href: edit().url }];

export default function Profile({ mustVerifyEmail, status }: { mustVerifyEmail: boolean; status?: string }) {
    const { auth } = usePage().props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profile settings" />
            <h1 className="sr-only">Profile Settings</h1>
            <SettingsLayout>
                <div className="space-y-6">
                    <Heading variant="small" title="Profile information" description="Update your name and email address" />
                    <Form {...ProfileController.update.form()} options={{ preserveScroll: true }} className="space-y-6">
                        {({ processing, recentlySuccessful, errors }) => (
                            <>
                                <Input name="name" label="Name" defaultValue={auth.user.name} isRequired autoComplete="name" placeholder="Full name" isInvalid={!!errors.name} hint={errors.name} />
                                <Input name="email" type="email" label="Email address" defaultValue={auth.user.email} isRequired autoComplete="username" placeholder="Email address" isInvalid={!!errors.email} hint={errors.email} />
                                {mustVerifyEmail && auth.user.email_verified_at === null && (
                                    <div>
                                        <p className="-mt-4 text-sm text-text-tertiary">
                                            Your email address is unverified.{' '}
                                            <Link href={send()} as="button" className="text-text-primary underline decoration-gray-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-gray-600">
                                                Click here to resend the verification email.
                                            </Link>
                                        </p>
                                        {status === 'verification-link-sent' && <div className="mt-2 text-sm font-medium text-success-600">A new verification link has been sent to your email address.</div>}
                                    </div>
                                )}
                                <div className="flex items-center gap-4">
                                    <Button type="submit" isDisabled={processing} data-test="update-profile-button">Save</Button>
                                    <Transition show={recentlySuccessful} enter="transition ease-in-out" enterFrom="opacity-0" leave="transition ease-in-out" leaveTo="opacity-0">
                                        <p className="text-sm text-text-tertiary">Saved</p>
                                    </Transition>
                                </div>
                            </>
                        )}
                    </Form>
                </div>
                <DeleteUser />
            </SettingsLayout>
        </AppLayout>
    );
}
