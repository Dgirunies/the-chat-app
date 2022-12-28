import React, { useRef, useState } from 'react'
import { Container, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { v4 as uuidV4 } from 'uuid'

export default function Login({ onIdSubmit }) {
    const [userIdInput, setUserIdInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onIdSubmit(userIdInput)
    }

    const createNewId = () => {
        onIdSubmit(uuidV4())
    }

    return (
        <Container
            className="align-items-center d-flex"
            style={{ height: '100vh' }}
        >
            <Form onSubmit={handleSubmit} className="w-100">
                <FormGroup>
                    <Label>Enter Your Id</Label>
                    <Input
                        value={userIdInput}
                        onChange={(e) => setUserIdInput(e.target.value)}
                        type="text"
                        required
                    />
                </FormGroup>
                <button
                    style={{ marginRight: '10px' }}
                    className="btn btn-primary"
                    type="submit"
                >
                    Login
                </button>
                <button
                    onClick={createNewId}
                    className="btn btn-secondary"
                    variant="secondary"
                    type='button'
                >
                    Create a New Id
                </button>
            </Form>
        </Container>
    )
}
