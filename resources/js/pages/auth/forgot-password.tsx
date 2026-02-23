import { Form, Head } from '@inertiajs/react';

import { Button } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';
import TextLink from '@/components/text-link';
import AuthLayout from '@/layouts/auth-layout';
import { login } from '@/routes';
import { email } from '@/routes/password';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <AuthLayout
            title="Forgot password"
            description="Enter your email to receive a password reset link"
        >
            <Head title="Forgot password" />
            {status && (
                <div className="mb-4 text-center text-sm font-medium text-success-600">
                    {status}
                </div>
            )}
            <div className="space-y-6">
                <Form {...email.form()}>
                    {({ processing, errors }) => (
                        <>
                            <Input
                                name="email"
                                type="email"
                                label="Email address"
                                autoComplete="off"
                                autoFocus
                                placeholder="email@example.com"
                                isInvalid={!!errors.email}
                                hint={errors.email}
                            />
                            <div className="my-6 flex items-center justify-start">
                                <Button
                                    className="w-full"
                                    type="submit"
                                    isDisabled={processing}
                                    isLoading={processing}
                                    data-test="email-password-reset-link-button"
                                >
                                    Email password reset link
                                </Button>
                            </div>
                        </>
                    )}
                </Form>
                <div className="space-x-1 text-center text-sm text-text-tertiary">
                    <span>Or, return to</span>
                    <TextLink href={login()}>log in</TextLink>
                </div>
            </div>
        </AuthLayout>
    );
}
