import React, { useState } from 'react'
import {
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Input,
    Label,
} from 'reactstrap'
import { useContacts } from '../contexts/ContactsProvider'

export default function NewContactModal({ closeModal }) {
    const [contactId, setContactId] = useState('')
    const [contactName, setContactName] = useState('')

    const { createContact } = useContacts()

    const handleSubmit = (e) => {
        e.preventDefault()

        createContact(contactId, contactName)
        closeModal()
    }
    return (
        <>
            <ModalHeader toggle={closeModal}> Create contact </ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>Id</Label>
                        <Input
                            type="text"
                            onChange={(e) => setContactId(e.target.value)}
                            value={contactId}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input
                            type="text"
                            onChange={(e) => setContactName(e.target.value)}
                            value={contactName}
                            required
                        />
                    </FormGroup>
                    <button className='btn btn-primary'>Create</button>
                </Form>
            </ModalBody>
        </>
    )
}
