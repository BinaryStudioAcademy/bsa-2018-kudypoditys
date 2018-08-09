import {storiesOf} from "@storybook/react";
import React from "react";


import 'client/styles/global.scss';

import {RankingBar} from 'client/components/ranking-bar';


storiesOf('RankingBar', module)
    .add('Ranking Bar', () => (
        <RankingBar/>
    ));