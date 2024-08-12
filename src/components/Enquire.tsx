import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { Input, Textarea, Button } from "@nextui-org/react";
import { useParams, usePathname } from "next/navigation";
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
  });
  const [enquiryType, setEnquiryType] = useState<any>("");
  const { data: getEnquiryType, isFetched } = useQuery({
    queryKey: ["get-queryType"],
    queryFn: () => {
      return getData("/enquiry-type/user", {});
    },
  });
  const params = usePathname();
  console.log(params);
  const name = params.split("/")[1];
  console.log(name);
  const { data, isError, isLoading } = useAuth();
  useEffect(() => {
    if (isFetched) {

      const enquiry = getEnquiryType?.data?.data?.filter((item: any) => {
        return item.name.toLocaleLowerCase() === name.toLocaleLowerCase();
      });
      setEnquiryType(enquiry[0]?._id);
    }
  }, [getEnquiryType, isFetched]);

  const addData = useMutation({
    mutationKey: ["addenuiry"],
    mutationFn: (data: any) => {
      return postData(`/enquiry/user`, {}, formData);
    },
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    const message = document.getElementsByTagName("textarea");
    setFormData((prev: any) => ({
      ...prev,
      name: inputs[0].value,
      phone: inputs[1].value,
      message: message[0].value,
      email: inputs[2].value,
      enquiryType: enquiryType,
    }));

    addData.mutate(formData);
  };
  return (
    <Modal isOpen={isOpen} onClose={() => onOpenChange(false)}>
      <ModalContent>
        <ModalHeader>Enquire Us</ModalHeader>
        <ModalBody>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-4"
          >
            <Input
              className="bg-white rounded-none"
              required
              value={data?.data?.name || ""}
              placeholder="Full Name"
            />
            <Input
              className="bg-white rounded-none"
              required
              placeholder="Phone"
              type="number"
            />
            <Textarea
              className="bg-white rounded-none"
              placeholder="Message"
              rows={4}
              required
            />
            <Input className="bg-white rounded-none" placeholder="Email" />
            <Button
              color="primary"
              radius="full"
              className="p-[1rem] "
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
