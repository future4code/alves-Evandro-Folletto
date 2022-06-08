import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
`

const IconImage = styled.img`
	width: 20px;
	margin-right: 5px;
`

export function IconeMarcacao(props) {
	return (
	<IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
	</IconContainer>
	)
}