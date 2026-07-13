"use client";

import { useEffect, useMemo, useState } from "react";
import { Table, Button, Chip } from "@heroui/react";
import Image from "next/image";



interface Book {
  _id: string;
  title: string;
  image: string;
  email: string;
  status: "published" | "unpublished";
  createdAt: string;
}

export default function BookApprovalQueue() {
  const [books, setBooks] = useState<Book[]>([]);

  const [sortDescriptor, setSortDescriptor] = useState({
    column: "title",
    direction: "ascending",
  });

  // ✅ Fetch books
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/housepost`)  
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // ✅ Sorting
 const sortedHouse = useMemo(() => {
  return [...books].sort((a, b) => {
    const col = sortDescriptor.column;

    const first =
      col === "date"
        ? new Date(a.createdAt)
        : String(a[col as keyof Book] ?? "");

    const second =
      col === "date"
        ? new Date(b.createdAt)
        : String(b[col as keyof Book] ?? "");

    let cmp: number;

    if (first instanceof Date && second instanceof Date) {
      cmp = first.getTime() - second.getTime();
    } else {
      cmp = (first as string).localeCompare(second as string);
    }

    if (sortDescriptor.direction === "descending") {
      cmp *= -1;
    }

    return cmp;
  });
}, [books, sortDescriptor]);

  // ✅ DELETE
  const handleDelete = async (id:string) => {
    if (!confirm("Are you sure?")) return;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/housepost/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.deletedCount > 0) {
      setBooks((prev) => prev.filter((b) => b._id !== id));
    }
  };

  // ✅ TOGGLE STATUS (MAIN FIX 🔥)
const handleToggleStatus = async (
  id: string,
  currentStatus: string
) => {
  const newStatus =
    currentStatus === "published"
      ? "unpublished"
      : "published";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/housepost/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: newStatus,
      }),
    }
  );

  const data = await res.json();

  if (data.modifiedCount > 0) {
    setBooks((prev) =>
      prev.map((book) =>
        book._id === id
          ? { ...book, status: newStatus }
          : book
      )
    );
  }
};

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold mb-4">
        Manage All properties
      </h2>

      {/* ================= MOBILE ================= */}
     <div className="grid gap-4 md:hidden">
  {sortedHouse.map((book) => (
    <div
      key={book._id}
      className="rounded-xl border bg-white p-4 shadow-sm"
    >
      {/* Book Image */}
      <Image
        src={book.image}
        alt={book.title}
        width={400}
        height={200}
        className="mb-3 h-48 w-full rounded-lg object-cover"
      />

      {/* Title */}
      <h3 className="text-lg font-semibold">
        {book.title}
      </h3>

      {/* Email */}
      <p className="mt-1 text-sm text-gray-500">
        📧 {book.email}
      </p>

      {/* Date */}
     <p className="mt-1 text-sm text-gray-500">
  📅{" "}
  {book.createdAt
    ? new Date(book.createdAt).toLocaleDateString()
    : "N/A"}
</p>

      {/* Status */}
      <div className="mt-3">
       <Chip
  variant="soft"
  color={book.status === "published" ? "success" : "warning"}
>
  {book.status ?? "unpublished"}
</Chip>
      </div>

      {/* Actions */}
      <div className="mt-4 flex gap-2">
        <Button
  fullWidth
  className={
    book.status === "published"
      ? "bg-green-600 text-white rounded-md"
      : "bg-yellow-500 text-white rounded-md"
  }
  onClick={() => handleToggleStatus(book._id, book.status)}
>
  {book.status === "published" ? "Unpublish" : "Publish"}
</Button>

        <Button
          fullWidth          
          className="bg-red-600 rounded-md"
          onClick={() => handleDelete(book._id)}
        >
          Delete
        </Button>
      </div>
    </div>
  ))}
</div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
  <Table>
    <Table.ScrollContainer>
      <Table.Content
        aria-label="Book Approval Table"
        className="min-w-[800px]"
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      >
        <Table.Header>
          <Table.Column allowsSorting id="image">
            Image
          </Table.Column>

          <Table.Column allowsSorting id="title">
            {({ sortDirection }) => (
              <Table.SortableColumnHeader sortDirection={sortDirection}>
                Title
              </Table.SortableColumnHeader>
            )}
          </Table.Column>

          <Table.Column id="email">
            Email
          </Table.Column>

          <Table.Column allowsSorting id="date">
            {({ sortDirection }) => (
              <Table.SortableColumnHeader sortDirection={sortDirection}>
                Date
              </Table.SortableColumnHeader>
            )}
          </Table.Column>

          <Table.Column id="status">
            Status
          </Table.Column>

          <Table.Column id="actions">
            Actions
          </Table.Column>
        </Table.Header>

        <Table.Body>
          {sortedHouse.map((book) => (
            <Table.Row key={book._id}>
              <Table.Cell>
                <Image
                  src={book.image}
                  alt={book.title}
                  width={90}
                  height={80}
                  className="w-24 h-20 rounded-lg object-cover"
                />
              </Table.Cell>

              <Table.Cell>{book.title}</Table.Cell>

              <Table.Cell>{book.email}</Table.Cell>

             <Table.Cell>
  {book.createdAt
    ? new Date(book.createdAt).toLocaleDateString()
    : "N/A"}
</Table.Cell>

              <Table.Cell>
                 <Chip
  variant="soft"
  color={book.status === "published" ? "success" : "warning"}
>
  {book.status ?? "unpublished"}
</Chip>
              </Table.Cell>

<Table.Cell>
  <div className="flex gap-2">
    <Button
      size="sm"
      className={
        book.status === "published"
          ? "bg-green-600 text-white rounded-md"
          : "bg-yellow-500 text-white rounded-md"
      }
      onClick={() => handleToggleStatus(book._id, book.status)}
    >
      {book.status === "published" ? "Unpublish" : "Publish"}
    </Button>

    <Button
      size="sm"
      className="bg-red-600 text-white rounded-md"
      onClick={() => handleDelete(book._id)}
    >
      Delete
    </Button>
  </div>
</Table.Cell>

            </Table.Row>
          ))}
        </Table.Body>
      </Table.Content>
    </Table.ScrollContainer>
  </Table>
</div>
    </div>
  );
}