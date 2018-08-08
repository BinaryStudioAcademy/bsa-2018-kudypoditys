import {storiesOf} from "@storybook/react";
import React from "react";
import { RankingBar } from 'client/components/ranking-bar'

function getSortType(val) {
    console.log(val)
}

storiesOf('RankingBar', module)
    .add('Ranking Bar', () => (
        <RankingBar sort={getSortType}/>
    ));