import React, { useState } from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';

const Inputs = ({HandleClick}) => {

    const [input, setInput] = useState('');

    return (
        <Container>
            <InputGroup className="mt-5">
                <Form.Control value={input} onInput={e => setInput(e.target.value)} className="p-3" type="email" placeholder="Search a movie.." />
                <Button onClick={() => HandleClick(input)} className="ml-2"variant="primary" type="submit"> Submit </Button>
            </InputGroup>
        </Container>
    );
};

export default Inputs;