import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { useConversations } from '../contexts/ConversationsProviver'

export default function Conversations() {
    const { conversations, selectConversationIndex } = useConversations()

    return (
        <ListGroup variant="flush">
            {conversations.map((conversation, index) => (
                <ListGroupItem
                    key={index}
                    active={conversation.selected}
                    onClick={() => selectConversationIndex(index)}
                >
                    {conversation.recipients.map((r) => r.name).join(', ')}
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}
