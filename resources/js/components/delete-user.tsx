import { Form } from '@inertiajs/react';
import { useRef } from 'react';

import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
import {
    Dialog,
    DialogTrigger,
    Modal,
    ModalOverlay,
} from '@/components/application/modals/modal';
import { Button } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';
import Heading from '@/components/heading';


export default function DeleteUser() {
    const passwordInput = useRef<HTMLInputElement>(null);

    return (
        <div className="space-y-6">
            <Heading
                variant="small"
                title="Delete account"
                description="Delete your account and all of its resources"
            />
            <div className="space-y-4 rounded-lg border border-error-300/30 bg-error-25 p-4 dark:border-error-500/20 dark:bg-error-950">
                <div className="relative space-y-0.5 text-error-600 dark:text-error-300">
                    <p className="font-medium">Warning</p>
                    <p className="text-sm">
                        Please proceed with caution, this cannot be undone.
                    </p>
                </div>

                <DialogTrigger>
                    <Button
                        color="primary-destructive"
                        data-test="delete-user-button"
                    >
                        Delete account
                    </Button>
                    <ModalOverlay isDismissable>
                        <Modal>
                            <Dialog>
                                {({ close }) => (
                                    <>
                                        <h2 className="text-lg font-semibold text-text-primary">
                                            Are you sure you want to delete your
                                            account?
                                        </h2>
                                        <p className="mt-2 text-sm text-text-tertiary">
                                            Once your account is deleted, all of
                                            its resources and data will also be
                                            permanently deleted. Please enter
                                            your password to confirm you would
                                            like to permanently delete your
                                            account.
                                        </p>

                                        <Form
                                            {...ProfileController.destroy.form()}
                                            options={{
                                                preserveScroll: true,
                                            }}
                                            onError={() =>
                                                passwordInput.current?.focus()
                                            }
                                            resetOnSuccess
                                            className="mt-4 space-y-6"
                                        >
                                            {({
                                                resetAndClearErrors,
                                                processing,
                                                errors,
                                            }) => (
                                                <>
                                                    <Input
                                                        type="password"
                                                        name="password"
                                                        ref={passwordInput}
                                                        placeholder="Password"
                                                        autoComplete="current-password"
                                                        isInvalid={
                                                            !!errors.password
                                                        }
                                                        hint={errors.password}
                                                    />

                                                    <div className="flex justify-end gap-2">
                                                        <Button
                                                            color="secondary"
                                                            onClick={() => {
                                                                resetAndClearErrors();
                                                                close();
                                                            }}
                                                        >
                                                            Cancel
                                                        </Button>
                                                        <Button
                                                            color="primary-destructive"
                                                            type="submit"
                                                            isDisabled={
                                                                processing
                                                            }
                                                            data-test="confirm-delete-user-button"
                                                        >
                                                            Delete account
                                                        </Button>
                                                    </div>
                                                </>
                                            )}
                                        </Form>
                                    </>
                                )}
                            </Dialog>
                        </Modal>
                    </ModalOverlay>
                </DialogTrigger>
            </div>
        </div>
    );
}
