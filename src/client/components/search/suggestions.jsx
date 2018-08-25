import React from "react";

const Suggestions = props => {
    const propertiesOptions = props.results.properties.map(property => (
        //TODO MAKE ITEMS AWERSOME!! ))
        <li key={property.id}>
            {property.image}
            {property.name}
        </li>
    ));
    const citiesOptions = props.results.citiesData.map(data => (
        <li key={data.id}>
            {data.cityName}
            {data.CountryName}
        </li>
    ));
    return <ul>{propertiesOptions}{citiesOptions}</ul>;
};
export default Suggestions;
