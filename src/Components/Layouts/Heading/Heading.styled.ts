import styled from "styled-components";
import { media } from "../../../styles/media.styled";

export const HeadingSec = styled.h2`
  font-size: ${({ theme }) => theme.fontSize["h-3"]};

  ${({theme})=> media.mobileLg`
    font-size:${theme.fontSize["h-2"]};
  `}
`;

export const HeadingTer = styled.h3`
  font-size: ${({ theme }) => theme.fontSize["h-3"]};
`;
