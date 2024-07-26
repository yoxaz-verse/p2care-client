import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react';
import { Input, Textarea, Button } from '@nextui-org/react';
import { useParams, usePathname } from 'next/navigation';

interface EnquireModalProps {
  onOpenChange: (isOpen: boolean) => void;
  isOpen: boolean;
}

const EnquireModal: React.FC<EnquireModalProps> = ({ onOpenChange, isOpen }) => {
  const url = usePathname();
  const params = useParams();
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
          <form className="flex flex-col gap-4">
            <Input
              className="bg-white rounded-none"
              placeholder="Full Name"
            />
            <Input
              className="bg-white rounded-none"

              placeholder="Email"
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
