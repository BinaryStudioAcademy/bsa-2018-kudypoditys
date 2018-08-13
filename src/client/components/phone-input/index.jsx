import React from "react";
import { Modal } from "semantic-ui-react";
import { Dropdown, Input, Flag } from "semantic-ui-react";
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
                    options={countries}
                    defaultValue="page"
                />
            }
            actionPosition={"left"}
            placeholder="Phone"
        />
    </div>
);
export default PhoneInput;
