import React, { useState } from "react";
import ladyicon from "../assets/ladyicon.png";

export default function ChatBox() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: "user" };

        // ✅ add user message
        setMessages(prev => [...prev, userMessage]);

        try {
            const res = await fetch("http://localhost:3000/users/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: input })
            });

            const data = await res.json();

            // ✅ add bot reply
            setMessages(prev => [
                ...prev,
                { text: data.reply || "No reply from server ⚠️", sender: "bot" }
            ]);

        } catch (err) {
            console.error(err);

            setMessages(prev => [
                ...prev,
                { text: "Hi, how can I help you?", sender: "bot" }
            ]);
        }

        setInput("");
    };

    return (
        <>
            {/* 💬 Floating Button */}
            <div style={styles.icon} onClick={() => setIsOpen(!isOpen)}>
                <img src={ladyicon} alt="chat" style={styles.iconImage} />
            </div>

            {/* 📦 Chat Box */}
            {isOpen && (
                <div style={styles.container}>
                    <div style={styles.header}>
                        Chat Support
                        <span
                            onClick={() => {
                                setIsOpen(false);
                                setMessages([]); // ✅ clear chat
                            }}
                            style={styles.close}
                        >
                            ✖
                        </span>
                    </div>

                    <div style={styles.chatArea}>
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                style={{
                                    ...styles.message,
                                    alignSelf:
                                        msg.sender === "user"
                                            ? "flex-end"
                                            : "flex-start",
                                    background:
                                        msg.sender === "user"
                                            ? "#007bff"
                                            : "#e5e5ea",
                                    color:
                                        msg.sender === "user"
                                            ? "white"
                                            : "black"
                                }}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div style={styles.inputArea}>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") sendMessage();
                            }}
                            placeholder="Type..."
                            style={styles.input}
                        />
                        <button onClick={sendMessage} style={styles.button}>
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

const styles = {
    icon: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#fff",
        padding: "5px",
        borderRadius: "50%",
        cursor: "pointer",
        zIndex: 1000,
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
    },
    iconImage: {
        width: "40px",
        height: "40px",
        borderRadius: "50%"
    },
    container: {
        position: "fixed",
        bottom: "80px",
        right: "20px",
        width: "300px",
        height: "400px",
        background: "white",
        border: "1px solid #ccc",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        zIndex: 1000
    },
    header: {
        padding: "10px",
        background: "#007bff",
        color: "white",
        display: "flex",
        justifyContent: "space-between"
    },
    close: { cursor: "pointer" },
    chatArea: {
        flex: 1,
        padding: "10px",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "8px"
    },
    message: {
        padding: "8px",
        borderRadius: "8px",
        maxWidth: "70%"
    },
    inputArea: {
        display: "flex",
        borderTop: "1px solid #ccc"
    },
    input: {
        flex: 1,
        padding: "8px",
        border: "none"
    },
    button: {
        padding: "8px",
        cursor: "pointer"
    }
};
