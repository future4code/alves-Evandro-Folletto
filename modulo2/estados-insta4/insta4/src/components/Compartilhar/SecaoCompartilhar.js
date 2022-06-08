import React, {Component} from 'react'
import styled from 'styled-components'

const CompartilharContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const IconImage = styled.img`
	width: 20px;
	margin-right: 5px;
`

export class SecaoCompartilhar extends Component {
	render() {
		return (
		<CompartilharContainer>
			<IconImage src={this.props.icone1} onClick={this.props.onClickIcone}/>
			<IconImage src={this.props.icone2} onClick={this.props.onClickIcone}/>
			<IconImage src={this.props.icone3} onClick={this.props.onClickIcone}/>
		</CompartilharContainer>
		)
	}
}