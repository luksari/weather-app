import React, { Component, SyntheticEvent } from 'react';
import { RootState } from 'MyTypes';
import { fetchWeather } from '../actions/weatherActions';
import {connect} from 'react-redux';
import styled from '../theme/theme';
import backgroundImg from '../assets/img/Mask Group 1.png'
import { getMyLocation } from '../actions/locationActions';
import locationIcon from '../assets/icons/ic_location.svg';

const AppHeaderContainer = styled.header`
    width: 100%;
    height: auto;
    position: relative;
    background: url('${backgroundImg}') no-repeat 0 0 fixed; 
    background-size: 100% 30%;
    z-index: 999;
    ::after{
        position: absolute;
        content: '';
        box-shadow: 0px 4px 6px ${props => props.theme.shadowColor};
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: .5;
    }
`
const FormContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const StyledInput = styled.input`
    width: 100%;
    font-size: 1.3em;
    outline: none;
    border: none;
    margin: 0 0 0 10px;
    padding: 5px;
    color: ${props=> props.theme.primaryColor__darken};
    &:focus{
        border-bottom: 2px solid ${props=> props.theme.primaryColor};
    }
`
const InputContainer = styled.div`
    position: relative;
    display: flex;
    background: #fff;
    border-radius: 5px;
    padding: 10px;
    margin: 0 0 10px 0;
`
const LocationButton = styled.button`
    display: flex;
    width: 20%;
    outline: none;
    background: none;
    border: none;
    justify-content: center;
    align-items: center;
`
const SubmitButton = styled.button`
    position: relative;
    font-size: .95em;
    background: ${props => props.theme.alternativeColor};
    border: none;
    padding: 15px;
    color: #FFF;
    border-radius: 5px;
    outline: none;
    :hover, :focus{
        ::after{
            opacity: .5;
        }
    }
    ::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: .8;
        box-shadow: 0px 3px 6px ${props=> props.theme.shadowColor};
        will-change: opacity;
        transition: opacity 200ms;
    }
`
const mapDispatchToProps = {
    fetchWeather: fetchWeather.request,
    getLocation: getMyLocation.request
}
const mapStateToProps = (state: RootState) => ({
    isLoading: state.weatherReducer.isLoadingWeather,
    position: state.locationReducer.position,
    weather: state.weatherReducer.weather,
})
type State = {
    location: string
}
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
class CityFormRaw extends Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            location: ' '
        }
    }
    handleChange = (event : React.FormEvent<HTMLInputElement>) => {
        this.setState({
            location: (event.target as HTMLInputElement).value
        })
    }
    handleSubmit = (event : SyntheticEvent) =>{
        const {fetchWeather } = this.props;
        fetchWeather(this.state.location);
        event.preventDefault();
    }
    handleClick = (event: SyntheticEvent) => {
        event.preventDefault();
        const { getLocation } = this.props;
        getLocation();  
    }
    render(){
        return(
            <AppHeaderContainer>
                <FormContainer onSubmit={this.handleSubmit}>
                    <InputContainer>
                        <StyledInput
                            placeholder="Name of the city..."
                            id="location"
                            type="text"
                            name="location"
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            />
                        <LocationButton type="button" onClick={this.handleClick}>
                            <img src={locationIcon}/>
                        </LocationButton>
                    </InputContainer>
                    <SubmitButton type="submit">SEARCH</SubmitButton>
                </FormContainer>
            </AppHeaderContainer>
        ) 
    }
}

export const CityForm = connect(mapStateToProps, mapDispatchToProps)(CityFormRaw);