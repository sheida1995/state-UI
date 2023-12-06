import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  color: ${props => props.selected ? "blue" : "red"};
  background-color: silver;

  @media (max-width : 1200px) {
    background-color :aqua;
  }
`;

const StyledComponent = () => {
  const [selected , setSelected] = useState(true)

 
  return (
    <Div selected={selected}>
      <button onClick={() => setSelected ((s) => !s )}>click</button>
      <h2>this text</h2>
      <p>
        {" "}
        this from your-url-is-problematic euphemiesyndrome liked this
        your-url-is-problematic reblogged this from owlmylove
        <hr />
        hackneyedhobgoblin liked this legislative-assembly-of-owls reblogged
        this from queerturtle queerturtle reblogged this from owlmylove
        t-t-tartaglia reblogged this from owlmylove dodare liked this whithr
        posted this
      </p>
    </Div>
  );
};

export default StyledComponent;
