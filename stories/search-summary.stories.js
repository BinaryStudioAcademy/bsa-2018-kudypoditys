import {storiesOf} from "@storybook/react";
import React from "react";
import {SearchSummary} from 'client/components/search-summary'


storiesOf('SearchSummary component', module)

    .add('Lviv and proper number', () => <SearchSummary data={{destination: "Lviv", numberOfMatched: '12345'}}/>)
    .add('negative number', () => <SearchSummary data={{destination: "Dnipro", numberOfMatched: '-13321'}}/>)
    .add('Odessa and invalid number', () => <SearchSummary data={{destination: "Odessa", numberOfMatched: 'sad'}}/>);
