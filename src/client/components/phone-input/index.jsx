import React from "react";
import { Dropdown, Input } from "semantic-ui-react";
import countries from "./common";

const PhoneInput = () => (
    <div>
        <Input
            action={
                <Dropdown
                    left="true"
                    button
                    basic
                    floating
                    defaultValue="af"
                    options={countries}
                />
            }
            actionPosition={"left"}
            placeholder="Phone"
        />
    </div>
);
export default PhoneInput;
