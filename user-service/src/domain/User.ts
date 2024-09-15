import * as t from "io-ts";

export const UserRole = t.union([t.literal("Admin"), t.literal("Customer")]);

export const User = t.type({
  id: t.string,
  name: t.string,
  role: UserRole,
  tenantId: t.string,
});

export type User = t.TypeOf<typeof User>;
export type UserRole = t.TypeOf<typeof UserRole>;
