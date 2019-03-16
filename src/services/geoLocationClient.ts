
export const getGeoLocation = (goToLocation) => (navigator.geolocation ? 
    navigator.geolocation.getCurrentPosition( (position : any) => (`${position.coord.latitude},${position.coord.longitude}`),
                                              (error : any) => window.location)
    : 

    )

    