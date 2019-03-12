import React, { Component, SyntheticEvent } from 'react';
import { RootState } from 'MyTypes';
import { fetchWeather } from '../actions/actions';
import {connect} from 'react-redux';
import styled from '../theme/theme';
import backgroundImg from '../assets/img/Mask Group 1.png'

const AppHeaderContainer = styled.header`
    width: 100%;
    height: 130px;
    background: url('${backgroundImg}') no-repeat 0 0 fixed; 
    background-size: 100% 130px;
    box-shadow: 0px 3px 6px ${props => props.theme.shadowColor};
`
const StyledInput = styled.input`
    width: 80%;
`
const mapDispatchToProps = {
    fetchWeather: fetchWeather.request
}
const mapStateToProps = (state: RootState) => ({
    isLoading: state.weatherReducer.isLoadingWeather
})
type State = {
    cityName: string
}
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

class CityFormRaw extends Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            cityName: ''
        }
    }
    handleChange = (event : React.FormEvent<HTMLInputElement>) => {
        this.setState({
            cityName: (event.target as HTMLInputElement).value
        })
    }
    handleSubmit = (event : SyntheticEvent) =>{
        this.props.fetchWeather(this.state.cityName)
        event.preventDefault();
    }
    render(){
        return(
            <AppHeaderContainer>
                <form onSubmit={this.handleSubmit}>
                    <StyledInput onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>

            </AppHeaderContainer>
        ) 
    }
}

export const CityForm = connect(mapStateToProps, mapDispatchToProps)(CityFormRaw);