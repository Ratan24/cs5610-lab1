import {
    Col,
    Row,
    Form,
    FormGroup,
    FormLabel,
    FormControl,
    FormSelect,
    InputGroup,
    Button,
  } from "react-bootstrap";
  
  export default function BootstrapForms() {
    return (
      <>
        {/* From Section 2.3.10 */}
        <div id="wd-css-styling-forms">
          <h2>Forms</h2>
          <FormGroup className="mb-3" controlId="wd-email">
            <FormLabel>Email address</FormLabel>
            <FormControl type="email" placeholder="name@example.com" />
          </FormGroup>
          <FormGroup className="mb-3" controlId="wd-textarea">
            <FormLabel>Example textarea</FormLabel>
            <FormControl as="textarea" rows={3} />
          </FormGroup>
        </div>
  
        {/* From Section 2.3.11 */}
        <div id="wd-css-styling-dropdowns">
          <h3>Dropdowns</h3>
          <FormSelect>
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </FormSelect>
        </div>
  
        {/* From Section 2.3.12 */}
        <div id="wd-css-styling-switches">
          <h3>Switches</h3>
          <Form.Check type="switch" label="Unchecked switch checkbox input" />
          <Form.Check type="switch" defaultChecked label="Checked switch checkbox input" />
          <Form.Check type="switch" label="Unchecked disabled switch checkbox input" disabled />
          <Form.Check type="switch" defaultChecked label="Checked disabled switch checkbox input" disabled />
        </div>
  
        {/* From Section 2.3.13 */}
        <div id="wd-css-styling-range-and-sliders">
        <h3>Range</h3>
        <FormGroup controlId="wd-range1">
          <FormLabel>Example range</FormLabel>
          {/* Changing FormRange to Form.Range */}
          <Form.Range min="0" max="5" step="0.5" />
        </FormGroup>
      </div>
  
        {/* From Section 2.3.14 */}
        <div id="wd-css-styling-addons">
          <h3>Addons</h3>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
            <FormControl />
          </InputGroup>
          <InputGroup>
            <FormControl />
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
          </InputGroup>
        </div>
  
        {/* From Section 2.3.15 */}
        <div id="wd-css-responsive-forms-2">
          <h3>Responsive forms</h3>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Email</Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Password</Form.Label>
              <Col sm={10}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2}>Radios</Form.Label>
                <Col sm={10}>
                  <Form.Check type="radio" label="first radio" name="formHorizontalRadios" defaultChecked />
                  <Form.Check type="radio" label="second radio" name="formHorizontalRadios" />
                  <Form.Check type="radio" label="third radio" name="formHorizontalRadios" />
                </Col>
              </Form.Group>
            </fieldset>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Remember me" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col>
                <Button type="submit">Sign in</Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </>
    );
  }