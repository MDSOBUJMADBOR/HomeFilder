"use client";

import { AlertDialog, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

// 🛠️ FIX: user প্রপের জন্য টাইপ ইন্টারফেস ডিফাইন করা হয়েছে
interface UserProp {
  _id: string;
  email?: string;
  name?: string;
  [key: string]: any; // অন্য কোনো অতিরিক্ত প্রোপার্টি থাকলে যেন এরর না দেয়
}

interface AddHouseDeleteProps {
  user: UserProp;
}

const AddHouseDelete = ({ user }: AddHouseDeleteProps) => {
  const router = useRouter();
  console.log(user, 'user');
  const { _id } = user;
  console.log(user, 'userlist');

  const handleDelete = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/housepost/${_id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      });
      
      if (res.ok) {
        // ✅ ক্লায়েন্ট সাইড সেফ নেভিগেশন
        router.push('/dashboard/user/myproperties');
        router.refresh(); 
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <div>
      <AlertDialog>
        <Button className="rounded-md" variant="danger">Delete</Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete <strong>My Awesome Project</strong> and all of its
                  data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                {/* Confirm বাটনে ক্লিক করলে ডিলিট ফাংশন রান হবে */}
                <Button onClick={handleDelete} slot="close" variant="danger">
                  Confirm Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default AddHouseDelete;