import Container from '../documentation/Container.js'

const Speakers = ({ children, ...rest }) => (
  <Container container {...rest}>
    <div className="speakers">
      <div className="grid">
        {children}
      </div>
    </div>
  </Container>
);

export default Speakers;
