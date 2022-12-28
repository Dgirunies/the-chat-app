import React, { useState } from 'react'
import classnames from 'classnames'
import { TabContent, NavItem, NavLink, Nav, TabPane, Button } from 'reactstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

export default function Sidebar({ id }) {
    const [activeTab, setActiveTab] = useState(CONVERSATIONS_KEY)

    return (
        <div
            style={{ width: '250px' }}
            className="d-flex flex-column border-right h-100"
        >
            <Nav className="justify-content-center" tabs>
                <NavItem>
                    <NavLink
                        onClick={() => setActiveTab(CONVERSATIONS_KEY)}
                        className={classnames({
                            active: activeTab === CONVERSATIONS_KEY,
                        })}
                        style={{ boderColor: 'transparent' }}
                    >
                        Conversation
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        onClick={() => setActiveTab(CONTACTS_KEY)}
                        className={classnames({
                            active: activeTab === CONTACTS_KEY,
                        })}
                        style={{ boderColor: 'transparent' }}
                    >
                        Contacts
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} style={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
                <TabPane className="flex-grow-1" tabId={CONVERSATIONS_KEY}>
                    <Conversations />
                </TabPane>
                <TabPane className="flex-grow-1" tabId={CONTACTS_KEY}>
                    <Contacts />
                </TabPane>
                <div className='p-2 border-top border-right small'>
                    Your Id: <span className='text-muted'>{id}</span>
                </div>
                {/* <button type="button" /> */}
            </TabContent>
        </div>
    )
}
