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
    width: 80%;
    font-size: 1.3em;
    outline: none;
    border: none;
    margin: 0 0 0 10px;
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
    location: string
}
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

function isPosition(pos: string | Position) : pos is Position {
    return (pos as Position).coords !== undefined;
}

class CityFormRaw extends Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            location: ''
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
        const {position, fetchWeather, getLocation} = this.props;
        event.preventDefault();
        getLocation();
        if(isPosition(position))
            fetchWeather(position);
        
    }
    render(){
        return(
            <AppHeaderContainer>
                <FormContainer onSubmit={this.handleSubmit}>
                    <InputContainer>
                        <StyledInput onChange={this.handleChange}/>
                        <LocationButton onClick={this.handleClick}>
                            <img src={locationIcon}/>
                        </LocationButton>
                    </InputContainer>
                    <StyledButton type="submit" value="SEARCH"/>
                </FormContainer>
            </AppHeaderContainer>
        ) 
    }
}

export const CityForm = connect(mapStateToProps, mapDispatchToProps)(CityFormRaw);