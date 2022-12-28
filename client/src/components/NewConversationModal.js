import React, { useState } from 'react'
import {
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    Input,
    FormGroup,
    Label,
} from 'reactstrap'
import { useContacts } from '../contexts/ContactsProvider'
import { useConversations } from '../contexts/ConversationsProviver'

export default function NewConversationModal({ closeModal }) {
    const [selectedContactIds, setSelectedContactIds] = useState([])

    const { contacts } = useContacts()
    const { createConversation } = useConversations()

    const handleSubmit = (e) => {
        e.preventDefault()

        createConversation(selectedContactIds)
        closeModal()
    }

    const handleCheckboxChange = (contactId) => {
        setSelectedContactIds((prevSelectedContactIds) => {
            if (prevSelectedContactIds.includes(contactId)) {
                return prevSelectedContactIds.filter(
                    (prevId) => prevId !== contactId
                )
            } else {
                return [...prevSelectedContactIds, contactId]
            }
        })
    }

    return (
        <>
            <ModalHeader toggle={closeModal}> Create Conversation </ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    {contacts.map((contact) => (
                        <FormGroup key={contact.id}>
                            <Input
                                type="checkbox"
                                value={selectedContactIds.includes(contact.id)}
                                name={contact.name}
                                onChange={() =>
                                    handleCheckboxChange(contact.id)
                                }
                            />{' '}
                            <Label check>{contact.name}</Label>
                        </FormGroup>
                    ))}
                    <button className="btn btn-primary">Create</button>
                </Form>
            </ModalBody>
        </>
    )
}
