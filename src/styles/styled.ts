import styled from '@emotion/styled';
import Image from '@components/Image';

export const Blank = styled.div<any>`
	${(props) => {
		if (props.horizontal) return `width: ${props.size};`;
		return `
      height: ${props.size};
    `;
	}}
`;

export const FullImage = styled(Image)`
	width: 100%;
`;
