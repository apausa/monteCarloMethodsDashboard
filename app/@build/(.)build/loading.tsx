'use client';

import {
  Modal,
  ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner, useDisclosure,
} from '@nextui-org/react';
import React, { useEffect } from 'react';

export default function Loading() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
    return () => { onClose(); };
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      size="xl"
      scrollBehavior="inside"
      backdrop="opaque"
      isDismissable={false}
    >
      <ModalContent>
        <ModalHeader />
        <ModalBody>
          <Spinner />
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
}
