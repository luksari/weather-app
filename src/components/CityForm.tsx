import React, { Component, SyntheticEvent } from 'react';
import { RootState } from 'MyTypes';
import { fetchWeather } from '../actions/weatherActions';
import {connect} from 'react-redux';
import styled from '../theme/theme';
import backgroundImg from '../assets/img/Mask Group 1.png'
import { getMyLocation } from '../actions/locationActions';

const AppHeaderContainer = styled.header`
    width: 100%;
    height: 130px;
    background: url('${backgroundImg}') no-repeat 0 0 fixed; 
    background-size: 100% 130px;
    box-shadow: 0px 3px 6px ${props => props.theme.shadowColor};
    z-index: 999;
`
const FormContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    align-items: center;
    justify-content: center;
`
const StyledInput = styled.input`
    width: 100%;
    font-size: 1.3em;
    outline: none;
    border: none;
    border-radius: 5px;
    margin: 0 0 15px 0;
    padding: 5px 0 5px 15px;
`
const StyledButton = styled.input`
    position: relative;
    font-size: .95em;
    width: 30%;
    background: ${props => props.theme.alternativeColor};
    border: none;
    padding: 15px;
    color: #FFF;
    border-radius: 5px;
    outline: none;
    &:hover,&:focus{
        border-bottom: 3px solid ${props => props.theme.primaryColor};
    }
`
const mapDispatchToProps = {
    fetchWeather: fetchWeather.request,
    getLocation: getMyLocation.request
}
const mapStateToProps = (state: RootState) => ({
    isLoading: state.weatherReducer.isLoadingWeather,
    position: state.locationReducer.position,
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
    handleClick = (event : SyntheticEvent) => {
        this.props.getLocation();
    }
    render(){
        return(
            <AppHeaderContainer>
                <button onClick={this.handleClick}>{location ? location.hash : 'XD'}</button>
                <FormContainer onSubmit={this.handleSubmit}>
                    <StyledInput onChange={this.handleChange}/>
                    <StyledButton type="submit" value="SEARCH"/>
                </FormContainer>

            </AppHeaderContainer>
        ) 
    }
}

export const CityForm = connect(mapStateToProps, mapDispatchToProps)(CityFormRaw);