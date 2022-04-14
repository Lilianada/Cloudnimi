import React from "react";
import { Columns, Description, Row, Section, IconWrap, TextWrap, TextHead, Text } from "./CloudnimiStyle";
import {HiArrowNarrowDown} from "react-icons/hi";
import {BsFillCloudFill} from "react-icons/bs";
import { Fade } from "react-reveal";

export default function CloudnimiDescription () {
    return(
        <Section id="cloudnimi">
            <Fade bottom>
                <h3>Why choose us <HiArrowNarrowDown /></h3>
                <Description>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                </Description>
                <Columns>
                    <Row>
                        <IconWrap>
                            <BsFillCloudFill />
                        </IconWrap>
                        <TextWrap>
                            <TextHead>
                                Lorem ipsum dolor sit amet
                            </TextHead>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua.
                            </Text>
                        </TextWrap>
                    </Row>
                    <Row>
                        <IconWrap>
                            <BsFillCloudFill />
                        </IconWrap>
                        <TextWrap>
                            <TextHead>
                                Lorem ipsum dolor sit amet
                            </TextHead>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua.
                            </Text>
                        </TextWrap>
                    </Row>
                    <Row>
                        <IconWrap>
                            <BsFillCloudFill />
                        </IconWrap>
                        <TextWrap>
                            <TextHead>
                                Lorem ipsum dolor sit amet
                            </TextHead>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua.
                            </Text>
                        </TextWrap>
                    </Row>
                    <Row>
                        <IconWrap>
                            <BsFillCloudFill />
                        </IconWrap>
                        <TextWrap>
                            <TextHead>
                                Lorem ipsum dolor sit amet
                            </TextHead>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua.
                            </Text>
                        </TextWrap>
                    </Row>
                </Columns>
            </Fade>
        </Section>
    );
}
