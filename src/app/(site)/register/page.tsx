"use client";
import Link from "next/link";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/react";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { User } from "types/User";
import { Loader2 } from "lucide-react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import React from "react";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required"),
});
 const getError = (err: any) =>
  err.response && err.response.data && err.response.data.message
    ? err.response.data.message
    : err.message;

export default function Register() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque')
  const router = useRouter();
  const { data } = useSession();
  const [disableButton, setDisableButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (data?.user) {
      router.push("/");
    }
  }, [data, router]);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: RegisterSchema,
    onSubmit: (values, { resetForm }) => {
      SignUpHandler(values);
    },
  });

  async function SignUpHandler(user: User) {
    try {
      setDisableButton(true);
      const data = await fetch("api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          password: user.password,
        }),
      });
      const res = await data.json();
      if (data.status === 200) {
        toast.success("User created");
        router.push("/login");
      } else {
        setDisableButton(false);
        toast.error((res));
      }
    } catch (err: any) {
      setDisableButton(false);
      toast.error((err));
    }
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="w-full md:w-[50%] max-w-[500px] border-2 bg-palette-card shadow-lg py-4 px-8 rounded-lg">
          <h2 className="text-lg md:text-2xl font-bold">
            Resgister Your Account
          </h2>
          <p className="mt-4 mb-2"></p>
          <div className="py-5">
            <form onSubmit={formik.handleSubmit} className="space-y-8">
              <Input
                id="name"
                name="name"
                type="text"
                label={"User Name"}
                labelPlacement="outside"
                required={true}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //   error={formik.touched.name && Boolean(formik.errors.name)}
                //   helperText={formik.touched.name && formik.errors.name}
              />
              <Input
                id="email"
                name="email"
                type="email"
                label={"Email"}
                labelPlacement="outside"
                required={true}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //   error={formik.touched.email && Boolean(formik.errors.email)}
                //   helperText={formik.touched.email && formik.errors.email}
              />
              <Input
                id="password"
                name="password"
                type="password"
                label={"Password"}
                labelPlacement="outside"
                required={true}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                
                  // onError={
                  //   formik.touched.password && Boolean(formik.errors.password)
                  // }
                //   helperText={formik.touched.password && formik.errors.password}
              />
              <button
                type="submit"
                disabled={disableButton}
                className="bg-palette-primary w-full py-4 rounded-lg text-palette-side text-xl shadow-lg flex justify-center"
              >
                {disableButton && (
                  <Loader2 className="mr-2 h-8 w-8 animate-spin" />
                )}
                Register
              </button>
            </form>
          </div>
        </div>
        <Link href={`/login`} className="block my-4">
          <span className="text-sm text-palette-mute"></span>
          <span className="text-cyan-500">Login</span>
        </Link>
      </div>

      
    </div>
  );
}
