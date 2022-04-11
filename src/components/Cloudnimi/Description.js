import React from "react";
import { Description, Section } from "./DescriptionStyle";
import {HiArrowNarrowDown} from "react-icons/hi";

export default function CloudnimiDescription () {
    return(
        <Section>
            <h3>What is Cloudnimi <HiArrowNarrowDown /></h3>
            <Description>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                Neque porro quisquam est, qui dolorem ipsum quia dolor.
            </Description>
        </Section>
    );
}
