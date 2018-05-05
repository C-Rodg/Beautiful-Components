import styled from 'styled-components';

const Header = styled.div`
	background-color: #00796b;
	color: rgba(255, 255, 255, 0.9);
	font-weight: 500;
	text-align: center;
	font-size: 1.6rem;
	padding: 8px 0;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
		0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
	flex-shrink: 0;
	width: 100%;
	z-index: 2;
	height: 46px;
	line-height: 1;
`;

export default Header;
