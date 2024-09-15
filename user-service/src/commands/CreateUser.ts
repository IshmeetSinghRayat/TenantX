import { User, UserRole } from "../domain/User";

interface CreateUserCommand {
  name: string;
  role: UserRole;
  tenantId: string;
}

export const createUser = (command: CreateUserCommand): User => {
  return {
    id: Math.random().toString(36).substring(2, 9),
    name: command.name,
    role: command.role,
    tenantId: command.tenantId,
  };
};
