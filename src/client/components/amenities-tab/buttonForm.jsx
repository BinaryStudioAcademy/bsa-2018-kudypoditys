import React, {  Fragment } from "react";
import { Card } from 'semantic-ui-react';
import ButtonWithCheckbox from './buttonWithCkheckbox';


let ButtonTab = (props) => {
    return (
        <Fragment >
            <Card style={{ width: '1000px' }} >
                <ButtonWithCheckbox contentTitle="Room amenities"
                    fieldsDataList={[{ label: "Clothes rack", name: "Clothes rack" }]} />
                <ButtonWithCheckbox contentTitle="Bathroom"
                    fieldsDataList={[{ label: " Spa tub", name: " Spa tub" }]} />
                < ButtonWithCheckbox contentTitle="Media & Technology"
                    fieldsDataList={[{ label: "Computer", name: "Computer" }]} />
                < ButtonWithCheckbox contentTitle="Food & Drink"
                    fieldsDataList={[{ label: "Dining area", name: "Dining area" }]} />
                <ButtonWithCheckbox contentTitle="Services & Extras"
                    fieldsDataList={[{ label: " Executive Lounge Access", name: " Executive Lounge Access" }]} />
                <ButtonWithCheckbox contentTitle="Outdoor & View"
                    fieldsDataList={[{ label: "Balcony", name: "Balcony" }]} />
                <ButtonWithCheckbox contentTitle='Building Characteristics'
                    fieldsDataList={[{ label: "Detached", name: "Detached" }]} />
                <ButtonWithCheckbox contentTitle='Entertainment & Family Services'
                    fieldsDataList={[{ label: "Board games/puzzles", name: "Board games/puzzles" }]} />

            </Card>
        </Fragment>
    )
}

export default ButtonTab