

import React from 'react'
import { Button } from './ui/button';
import Modal from "@/components/ui/modal";
const CompoundComponentModal = () => {
  return (
    
    <Modal>
    <Modal.Trigger>
      Open
      </Modal.Trigger>
      <Modal.Content>
      <Modal.Header>
        <Modal.Title>Are you absolutely sure?</Modal.Title>
        <Modal.Description>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </Modal.Description>
      </Modal.Header>
      </Modal.Content> 
  </Modal>
    
  )
}

export default CompoundComponentModal
