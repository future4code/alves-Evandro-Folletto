import React, {Component} from 'react'
import styled from 'styled-components'

const CompartilharContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
	margin-left: 75px;
`

const IconImage = styled.img`
	width: 20px;
	margin-right: 5px;
	cursor: pointer;
`

export class SecaoCompartilhar extends Component {
	render() {
		return (
		<CompartilharContainer>
			<IconImage id="1" src={this.props.icone1} onClick={this.props.aoCompartilhar}/>
			<IconImage id="2" src={this.props.icone2} onClick={this.props.aoCompartilhar}/>
			<IconImage id="3" src={this.props.icone3} onClick={this.props.aoCompartilhar}/>
		</CompartilharContainer>
		)
	}
}