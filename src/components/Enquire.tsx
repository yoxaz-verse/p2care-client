"use client";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getData, postData } from "@/core/apiHandler";
import { toast } from "sonner";
import useAuth from "@/app/isAuth";

interface EnquireModalProps {
  onOpenChange: (isOpen: boolean) => void;
  isOpen: boolean;
}

const EnquireModal: React.FC<EnquireModalProps> = ({
  onOpenChange,
  isOpen,
}) => {
  const url = usePathname();
  const [formData, setFormData] = useState<any>({
    name: "",
    message: "",
    email: "",
    phone: "",
    enquiryType: "",
    id: "",
  });
  const [enquiryType, setEnquiryType] = useState<string>("");
  const { data: getEnquiryType, isFetched } = useQuery({
    queryKey: ["get-queryType"],
    queryFn: () => getData("/enquiry-type/user", {}),
  });

  const params = usePathname();
  const lastSegment = params.split("/").pop(); // Get the last segment of the URL

  function isValidId(id: string): boolean {
    const idPattern = /^[a-fA-F0-9]{24}$/;
    return idPattern.test(id);
  }

  const { data, isError, isLoading } = useAuth();

  useEffect(() => {
    if (isFetched) {
      let val = params.split("/")[1] !== "" ? params.split("/")[1].toLowerCase() : "others";
      const enquiry = getEnquiryType?.data?.data?.find((item: any) =>
        item.name.toLowerCase().includes(val)
      );
      console.log("enquiry", enquiry);
      setEnquiryType(enquiry?._id || "");
    }

    if (data?.data?.name) {
      setFormData((prev: any) => ({
        ...prev,
        name: data.data.name,
      }));
    }
  }, [getEnquiryType, isFetched, params, data?.data?.name]);

  const addData = useMutation({
    mutationKey: ["add-enquiry"],
    mutationFn: (data: any) => postData(`/enquiry/user`, {}, data),
    onSuccess: (data: any) => {
      console.log(data);
      toast.success("Enquiry Sent!", {
        position: "top-right",
        className: "bg-green-300",
      });
    },
    onError: (error: any) => {
      console.log(error);
      toast.error("Enquiry error in sending!", {
        position: "top-right",
        className: "bg-red-300",
      });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const phone = form.phone.value;
    const message = form.message.value;
    const email = form.email.value;

    const updatedFormData = {
      ...formData,
      phone,
      message,
      email,
      enquiryType,
      id: isValidId(lastSegment || "") ? lastSegment : "",
    };

    setFormData(updatedFormData);
    addData.mutate(updatedFormData);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => onOpenChange(false)}>
      <ModalContent>
        <ModalHeader>Enquire Us</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              className="bg-white rounded-none"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              disabled={!!data?.data?.name} // Disable if data.data.name is present
            />
            <Input
              className="bg-white rounded-none"
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              type="number"
            />
            <Textarea
              className="bg-white rounded-none"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              required
            />
            <Input
              className="bg-white rounded-none"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <Button
              color="primary"
              radius="full"
              className="p-[1rem]"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            variant="ghost"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EnquireModal;
