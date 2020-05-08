import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

export function ContactMe() {
    return (
        <div>
            <p>Contact me</p>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">E-mail</InputGroup.Text>
                    <FormControl placeholder="E-mail" />
                </InputGroup.Prepend>
                
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Your Message</InputGroup.Text>
                    <FormControl as="textarea" />
                </InputGroup.Prepend>
                <Button variant="outline-secondary">Send</Button>
            </InputGroup>
        </div>
    )
}
