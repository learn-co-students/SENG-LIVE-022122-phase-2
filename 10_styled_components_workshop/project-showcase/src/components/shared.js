import styled, { css } from "styled-components";

export const active = css`
  outline: none;
  background-color: var(--blue);
  border: 2px solid var(--primary);
`

export const buttonBase = css`
  padding: 0.5rem 0.75rem;
  border: none;
  font: inherit;
  font-weight: 600;
  color: inherit;
  cursor: pointer;
  color: var(--primary);
  background-color: var(--background);
  border: 2px solid var(--dark-turquoise);
  transition: background-color 0.2s;

  &:hover, &:active, &:focus, &.active {
    ${active}
  }
`

export const Button = styled.button`
  ${buttonBase}

  &:disabled {
    cursor: not-allowed;
    color: var(--dark-grey);
    background-color: var(--grey);
  }
`

export const HorizontalButtonContainer = styled.div`
  display: flex;
  & * {
    margin: 0 0.5rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  border: 2px solid var(--dark-turquoise);
  padding: 1.75rem;

  & h3 {
    margin-bottom: 1rem;
  }
`

export const Input = styled.input`
  margin-top: 0.25rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: none;
  font-size: 1.25rem;
  font-weight: bold;
  transition: all 0.3s;
  border: 2px solid var(--color);

  &:focus {
    outline: none;
    border: 2px solid var(--primary);
  }
`

export const Box = styled.div`
  margin-left: ${(props) => {
    if (props.ml) {
      return props.ml;
    } else if (props.mx) {
      return props.mx;
    } else if (props.mxAuto) {
      return 'auto';
    } else if (props.m) {
      return props.m;
    } else {
      return 0;
    }
  }};
  margin-right: ${(props) => {
    if (props.mr) {
      return props.mr;
    } else if (props.mx) {
      return props.mx;
    } else if (props.mxAuto) {
      return 'auto';
    } else if (props.m) {
      return props.m;
    } else {
      return 0;
    }
  }};
  margin-top: ${(props) => {
    if (props.mt) {
      return props.mt;
    } else if (props.my) {
      return props.my;
    } else if (props.myAuto) {
      return 'auto';
    } else if (props.m) {
      return props.m;
    } else {
      return 0;
    }
  }};
  margin-bottom: ${(props) => {
    if (props.mb) {
      return props.mb;
    } else if (props.my) {
      return props.my;
    } else if (props.myAuto) {
      return 'auto';
    } else if (props.m) {
      return props.m;
    } else {
      return 0;
    }
  }};
  padding-left: ${(props) => {
    if (props.pl) {
      return props.pl;
    } else if (props.px) {
      return props.px;
    } else if (props.pxAuto) {
      return 'auto';
    } else if (props.p) {
      return props.p;
    } else {
      return 0;
    }
  }};
  padding-right: ${(props) => {
    if (props.pr) {
      return props.pr;
    } else if (props.px) {
      return props.px;
    } else if (props.pxAuto) {
      return 'auto';
    } else if (props.p) {
      return props.p;
    } else {
      return 0;
    }
  }};
  padding-top: ${(props) => {
    if (props.pt) {
      return props.pt;
    } else if (props.py) {
      return props.py;
    } else if (props.pyAuto) {
      return 'auto';
    } else if (props.p) {
      return props.p;
    } else {
      return 0;
    }
  }};
  padding-bottom: ${(props) => {
    if (props.pb) {
      return props.pb;
    } else if (props.py) {
      return props.py;
    } else if (props.pyAuto) {
      return 'auto';
    } else if (props.p) {
      return props.p;
    } else {
      return 0;
    }
  }};
  border: ${props => props.border ? '2px solid var(--dark-turquoise)' : 'none'};
  display: ${props => props.d};
  ${props => props.flexDirection && `flex-direction: ${props.flexDirection};`}
  ${props => props.itemsCenter && 'align-items: center;'}
`

export const Card = styled.li`
  max-width: 400px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  border: 2px solid var(--dark-turquoise);

  @media (max-width: 588px) {
    display: block;
    max-width: inherit;
  }
`