import styled from "styled-components";

export const StyledTodo = styled.li`
  color: ${props => props.nameS ? "grey" : ''};
  text-decoration: ${props => props.nameS ? "line-through" : ''};

`;