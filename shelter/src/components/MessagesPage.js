import React, { useEffect, useState } from 'react'
import AdminNav from '../elements/adminPage/AdminNav'
import { getMessages } from '../actions/contact'
import MessageCard from '../elements/adminPage/MessageCard';

function MessagesPage() {
    const [messagesReceived, setMessagesReceived] = useState([]);

    useEffect(() => {
        getMessages(setMessagesReceived)
    }, [])

    return (
        <div>
            <AdminNav />
            <div className="grid">
                {messagesReceived.map((item, index) => {
                    return (
                        <MessageCard 
                        key={index} 
                        name={item.name} 
                        email={item.email} 
                        message={item.message} 
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MessagesPage
