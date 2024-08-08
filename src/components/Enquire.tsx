import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react';
import { Input, Textarea, Button } from '@nextui-org/react';
import { useParams, usePathname } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getData, postData } from '@/core/apiHandler';
import { toast } from 'sonner';

interface EnquireModalProps {
  onOpenChange: (isOpen: boolean) => void;
  isOpen: boolean;
}

const EnquireModal: React.FC<EnquireModalProps> = ({ onOpenChange, isOpen }) => {
  const url = usePathname();
  const [formData, setFormData] = useState<any>(
    {
      name: "",
      message: "",
      email: "",
    }
  );
  const { data: getEnquiryType } = useQuery({
    queryKey: ["get-queryType"],
    queryFn: () => {
      return getData("/enquiry-type/user", {});
    }
  })
  const params = useParams();
  console.log(params);
  const addData = useMutation({
    mutationKey: ["addenuiry"],
    mutationFn: (data: any) => {
      return postData(`/enquiry`, data);
    },
    onSuccess: (data: any) => {
      console.log(data);
      toast.success("Enquiry Sent!", {
        position: "top-right",
        className: "bg-green-300"
      })
    },
    onError: (error: any) => {
      console.log(error);
      toast.error("Enquiry error in sending!", {
        position: "top-right",
        className: "bg-red-300"
      })
    }
  })
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName('input');
    const message = document.getElementsByTagName('textarea');
    setFormData((prev: any) => ({
      ...prev,
      name: inputs[0].value,
      email: inputs[1].value,
      message: message[0].value
    }));
    const item = {
      ...formData
    }
    //addData.mutate(item);

  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => onOpenChange(false)}
    >
      <ModalContent>
        <ModalHeader>
          Enquire Us
        </ModalHeader>
        <ModalBody>
          <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
            <Input
              className="bg-white rounded-none"
              placeholder="Full Name"
            />
            <Input
              className="bg-white rounded-none"
              placeholder="Phone"
            />
            <Textarea
              className="bg-white rounded-none"
              placeholder="Message"
              rows={4}
            />
            <Button color="primary" radius="full" className="p-[1rem]">
              Submit
            </Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant='ghost' onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button color="primary" onClick={() => onOpenChange(false)}>
            Enquire
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EnquireModal;
