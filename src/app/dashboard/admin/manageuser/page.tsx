"use client";

import { useEffect, useState } from "react";
import {
  Table,
  Button,
  Dropdown,
  Label,
  Chip,
} from "@heroui/react";

interface User {
  _id: string;
  name: string;
  email: string;
  role: "user" | "librarian" | "admin";
}

interface Role {
  id: User["role"];
  label: string;
}

const ROLES: Role[] = [
  { id: "user", label: "User" },
  // { id: "librarian", label: "Librarian" },
  { id: "admin", label: "Admin" },
];

export default function AdminManageUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch Users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`);
        const data: User[] = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Delete User
  const handleDelete = async (id: string): Promise<void> => {
    if (!confirm("Are you sure?")) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`,
        {
          method: "DELETE",
        }
      );

      const data: { deletedCount: number } = await res.json();

      if (data.deletedCount > 0) {
        setUsers((prev) => prev.filter((user) => user._id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Change Role
  const handleRoleChange = async (
    id: string,
    role: User["role"]
  ): Promise<void> => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ role }),
        }
      );

      const data: { modifiedCount: number } = await res.json();

      if (data.modifiedCount > 0) {
        setUsers((prev) =>
          prev.map((user) =>
            user._id === id ? { ...user, role } : user
          )
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Role Color
 const getRoleColor = (
  role: User["role"]
): "default" | "danger" | "accent" => {
  switch (role) {
    case "admin":
      return "danger";

    case "librarian":
      return "accent"; // instead of primary

    default:
      return "default";
  }
};

  interface RoleDropdownProps {
    user: User;
  }

  const RoleDropdown = ({ user }: RoleDropdownProps) => (
    <Dropdown>
      <Button aria-label="Change role">
        {ROLES.find((r) => r.id === user.role)?.label ?? "User"}
      </Button>

      <Dropdown.Popover>
        <Dropdown.Menu
          aria-label="Role"
          selectionMode="single"
          selectedKeys={[user.role]}
          onAction={(key) =>
            handleRoleChange(user._id, key as User["role"])
          }
        >
          {ROLES.map((role) => (
            <Dropdown.Item
              key={role.id}
              id={role.id}
              textValue={role.label}
            >
              <Label>{role.label}</Label>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );

  if (loading) {
    return (
      <div className="p-6 text-center text-lg">
        Loading users...
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <h2 className="mb-4 text-lg font-semibold md:text-xl">
        Manage Users
      </h2>

      {/* Mobile View */}
      <div className="grid gap-4 md:hidden">
        {users.map((user) => (
          <div
            key={user._id}
            className="rounded-xl border bg-white p-4 shadow-sm"
          >
            <h3 className="text-base font-semibold">
              {user.name || "No Name"}
            </h3>

            <p className="text-sm text-gray-500">
              {user.email}
            </p>

            <div className="mt-2">
             <Chip color={getRoleColor(user.role)}>
  {user.role}
</Chip>
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <RoleDropdown user={user} />

              <Button
                className="bg-red-500 text-white"
                fullWidth
                onClick={() => handleDelete(user._id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="w-full overflow-x-auto">
          <Table>
            <Table.ScrollContainer>
              <Table.Content
                aria-label="Users"
                className="min-w-[800px]"
              >
                <Table.Header>
                  <Table.Column>Name</Table.Column>
                  <Table.Column>Email</Table.Column>
                  <Table.Column>Role</Table.Column>
                  <Table.Column>Actions</Table.Column>
                </Table.Header>

                <Table.Body>
                  {users.map((user) => (
                    <Table.Row key={user._id} id={user._id}>
                      <Table.Cell>
                        {user.name || "No Name"}
                      </Table.Cell>

                      <Table.Cell className="break-all">
                        {user.email}
                      </Table.Cell>

                      <Table.Cell>
                        <Chip color={getRoleColor(user.role)}>
                          {user.role}
                        </Chip>
                      </Table.Cell>

                      <Table.Cell className="flex items-center gap-2">
                        <RoleDropdown user={user} />

                        <Button
                          className="bg-red-500 text-white"
                          onClick={() => handleDelete(user._id)}
                        >
                          Delete
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </div>
      </div>
    </div>
  );
}