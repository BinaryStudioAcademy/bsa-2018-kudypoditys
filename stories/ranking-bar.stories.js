import {storiesOf} from "@storybook/react";
import React from "react";
import {RankingBar} from 'client/components/ranking-bar'

function getSortType(val) {

    console.log(val)


}


storiesOf('Sorting component', module)
    .add('Ranking Bar', () => (
        <RankingBar sort={getSortType}/>
    ));