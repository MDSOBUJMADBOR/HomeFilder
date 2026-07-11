"use client";

import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  ListBox,
  Select,
  TextField,
  Separator,
} from "@heroui/react";
import type { Selection } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { LiaFacebookF } from "react-icons/lia";
import { redirect, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

interface SignUpFormData {
  name: string;  
  email: string;
  password: string; 
}



export default function SignUpPage() {
  const [loading, setLoading] = useState<boolean>(false);



const router = useRouter();

const onSubmit = async (
  e: React.FormEvent<HTMLFormElement>
): Promise<void> => {
  e.preventDefault();
  setLoading(true);

  try {
    const formData = new FormData(e.currentTarget);

    const user: SignUpFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    await authClient.signUp.email(user);

    router.push("/");
  } catch (error) {
    console.error(error);
    alert("Registration failed");
  } finally {
    setLoading(false);
  }
};


  const handleGoogleSignin = async (): Promise<void> => {
    // try {
    //   await authClient.signIn.social({
    //     provider: "google",
    //   });

    //   redirect("/");
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl border p-8 shadow-xl">
        <Surface className="bg-transparent">
          <Form onSubmit={onSubmit}>
            <Fieldset className="w-full">
              <Fieldset.Legend className="text-center text-3xl font-bold ">
                Create Your Account
              </Fieldset.Legend>

              <Description className="mb-6 text-center text-lg ">
                Join today!
              </Description>

              <Fieldset.Group className="space-y-4">
                <TextField isRequired name="name">
                  <Label>
                    Full Name
                  </Label>
                  <Input
                    placeholder="Your Name"
                    variant="secondary"
                  />
                  <FieldError />
                </TextField>

               

                <TextField
                  isRequired
                  name="email"
                  type="email"
                >
                  <Label >
                    Email
                  </Label>
                  <Input
                    placeholder="Your Email"
                    variant="secondary"
                  />
                  <FieldError />
                </TextField>

                <TextField
                  isRequired
                  name="password"
                  type="password"
                >
                  <Label >
                    Password
                  </Label>
                  <Input
                    placeholder="Password"
                    variant="secondary"
                  />
                  <FieldError />
                </TextField>

                

                {/* <Select
                  name="role"
                  selectedKeys={role}
                  onSelectionChange={setRole}
                  placeholder="Select Role"
                >
                  <Label className="text-white">
                    Signup As
                  </Label>

                  <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="user">
                        User
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="librarian">
                        Librarian
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select> */}
                {/* <Select
  name="role"
  selectedKeys={role}
  onSelectionChange={setRole}
  placeholder="Select Role"
>
  ...
</Select> */}
              </Fieldset.Group>

              <Button
                type="submit"
                className="mt-6 w-full  rounded-lg"
                isDisabled={loading}
              >
                {loading
                  ? "Registering..."
                  : "Register"}
              </Button>
            </Fieldset>
          </Form>

          <div className="my-5 flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-sm text-white">
              Or continue with
            </span>
            <Separator className="flex-1" />
          </div>

          
        <div className="flex flex-col gap-3">
    <Button
            onPress={handleGoogleSignin}
            variant="outline"
            className="w-full rounded-lg"
          >
            <FcGoogle className="mr-2 text-xl" />
            Sign up with Google
          </Button>
    <Button
            onPress={handleGoogleSignin}
            variant="outline"
            className="w-full rounded-lg"
          >            
           <LiaFacebookF className="mr-2 text-xl" />
            Sign up with Facebook
          </Button>
        </div>





          <p className="mt-5 text-center text-sm ">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-bold text-blue-400 hover:underline"
            >
              Login
            </Link>
          </p>
        </Surface>
      </div>
    </div>
  );
}