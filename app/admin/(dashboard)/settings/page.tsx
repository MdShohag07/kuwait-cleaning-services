"use client";
import { useActionState } from "react";
import { changePassword, type ActionState } from "@/lib/actions/settings";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { fieldCls, labelCls, btnPrimaryCls } from "@/lib/adminUi";

const initialState: ActionState = {};

export default function SettingsPage() {
  const [state, formAction] = useActionState(changePassword, initialState);

  return (
    <div className="max-w-md">
      <h1 className="mb-6 text-2xl font-semibold">Settings</h1>

      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-medium">Change password</h2>

        {state.success ? (
          <p className="text-sm text-green-700">Your password has been updated.</p>
        ) : (
          <form action={formAction} className="flex flex-col gap-4">
            <div>
              <label className={labelCls}>Current password</label>
              <input type="password" name="currentPassword" required autoComplete="current-password" className={fieldCls} />
            </div>
            <div>
              <label className={labelCls}>New password</label>
              <input type="password" name="newPassword" required minLength={8} autoComplete="new-password" className={fieldCls} />
            </div>
            <div>
              <label className={labelCls}>Confirm new password</label>
              <input type="password" name="confirmPassword" required minLength={8} autoComplete="new-password" className={fieldCls} />
            </div>

            {state.error && <p className="text-sm text-red-600">{state.error}</p>}

            <div className="pt-2">
              <SubmitButton label="Update password" pendingLabel="Updating..." className={btnPrimaryCls} />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
