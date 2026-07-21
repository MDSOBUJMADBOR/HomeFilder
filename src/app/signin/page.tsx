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
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

interface SignInFormData {
  email: string;
  password: string; 
}



export default function SignInPage() {
  const [loading, setLoading] = useState<boolean>(false);




const onSubmit = async (
  e: React.FormEvent<HTMLFormElement>
): Promise<void> => {
  e.preventDefault();
  setLoading(true);

  try {
    const formData = new FormData(e.currentTarget);

    const user: SignInFormData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    await authClient.signIn.email({
      email: user.email,
      password: user.password,
      callbackURL: "/",
    });

    toast.success("Sign-in successful");
  } catch (error) {
    console.error(error);
    alert("Sign-in failed");
  } finally {
    setLoading(false);
  }
};

const handleGoogleSignin = async () => {
  try {
    await authClient.signIn.social({      
      provider: "google",
      callbackURL: "/",
    });
  } catch (error) {
    console.error(error);  

  }
};

const handleFacebookSignin = async () => {
  try {
    await authClient.signIn.social({      
      provider: "facebook",
      callbackURL: "/",
    });
  } catch (error) {
    console.error(error);
  }
};



  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl border p-8 shadow-xl">
        <Surface className="bg-transparent">
          <Form onSubmit={onSubmit}>
            <Fieldset className="w-full">
              <Fieldset.Legend className="text-center text-3xl font-bold ">
                Sign In to Your Account
              </Fieldset.Legend>

              <Description className="mb-6 text-center text-lg ">
                Welcome back!
              </Description>

              <Fieldset.Group className="space-y-4">
                               

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
                  ? "Signing in..."
                  : "Sign In"}
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
            onPress={handleFacebookSignin}
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
              href="/signup"
              className="font-bold text-blue-400 hover:underline"
            >
              Register
            </Link>
          </p>
        </Surface>
      </div>
    </div>
  );
}