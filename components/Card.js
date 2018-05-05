import styled from 'styled-components';

const Card = styled.div`
	border-radius: 2px;
	background: #fff;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
	max-width: 450px;
	margin: 0 auto 15px auto;
	overflow: hidden;
`;

Card.Title = styled.div`
	font-weight: 500;
	font-size: 1.2rem;
	padding: 10px 10px 4px 10px;
	color: #111;
`;

Card.Body = styled.div`
	padding: 3px 10px 8px 10px;
	line-height: 1.4;
	color: #666;
`;

Card.Footer = styled.div`
	border-top: 0.55px solid #c8c7cc;
	display: flex;
	flex-direction: row;
	width: 100%;
`;

Card.Footer.ButtonItem = styled.a`
	border-right: 0.55px solid #c8c7cc;
	display: inline-block;
	flex-grow: 1;
	font-weight: 500;
	text-align: center;
	text-transform: uppercase;
	padding: 9px 5px;
	user-select: none;
	color: #333;
	cursor: pointer;

	&:last-child {
		border-right-color: transparent;
	}

	&:active,
	&:hover {
		background-color: #e7e7e7;
	}
`;

export default Card;
