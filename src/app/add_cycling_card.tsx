"use client";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { HIP_HOP_GROOVES, HIP_HOP_MOVES } from "@/lib/config";

const prePopulatedPrompts = [
    {
        value: "hip_hop_moves",
        label: "Hip Hop Moves",
        values: HIP_HOP_MOVES,
    },
    {
        value: "hip_hop_grooves",
        label: "Hip Hop Grooves",
        values: HIP_HOP_GROOVES,
    },
    {}

]



export function AddCyclingCard({ cards, setCards }: { cards: any[]; setCards: any }) {
    const [textAreaValue, setTextAreaValue] = useState(prePopulatedPrompts[0].values.join(", "));
    const [selectValue, setSelectValue] = useState(prePopulatedPrompts[0].value)

    const handleAddCard = () => {
        const combinedMessages = textAreaValue.split(",").map(item => item.trim()).filter(item => item);
        setCards((prevCards) => [
            ...prevCards,
            { messages: combinedMessages, initialCycleTime: 1 },
        ]);
        setTextAreaValue(""); // Clear the text area after adding the card
    };

    const handleSelectChange = (e) => {
        setSelectValue(e.target.value)
        setTextAreaValue(prePopulatedPrompts.find(prompt => prompt.value === e.target.value).values.join(", "))
    }

    return (
        <div className="p-24">
            <Card className="w-6/12">
                <Card.Header>
                    <Card.Title>Add a new prompt</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form.Select aria-label="Default select example" onChange={handleSelectChange}>
                        {prePopulatedPrompts.map((prompt, index) => (
                            <option value={prompt.value} key={index}>{prompt.label}</option>
                        ))}
                    </Form.Select>
                    <Form.Control as="textarea" rows={3} value={textAreaValue} onChange={(e) => setTextAreaValue(e.target.value)} />
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={handleAddCard}>Add</Button>{' '}
                </Card.Footer>
            </Card>
        </div >
    )
}


export default AddCyclingCard;
