import React from "react";
import { Dropdown, Input } from "semantic-ui-react";
import countries from "./countriesInfo.js";
import "./index.scss";

const PhoneInput = () => (
    <div>
        <Input
            action={
                <Dropdown
                    className="phone-dropdown"
                    compact={true}
                    left="true"
                    button
                    basic
                    floating
                    selection
                    defaultValue="+380"
                    options={countries}
                />
            }
            actionPosition={"left"}
            placeholder="Phone"
        />
    </div>
);
export default PhoneInput;
