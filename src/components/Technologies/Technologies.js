import React from 'react';
import {Section,
        Description,
        SectionWrap,
        TechStack,
        ImageWrap,
        Image,
        TechDescription,
        DescriptionHead,
        DescriptionText} 
from './TechnologiesStyles';
import Ansible from "../../assets/ansible-devops.svg";
import Amazon from "../../assets/amazon-web-services.svg";
import Docker from "../../assets/Docker_Logo.svg";
import Gitlab from "../../assets/GitLab_logo.svg";
import GoogleCloud from "../../assets/google-cloud-platform.svg";
import Kubernetes from "../../assets/kubernetes-logo-vector-transparent.svg";
import Azure from "../../assets/microsoft-azure.svg";
import Terraform from "../../assets/Terraform-logo.svg";
import {HiArrowNarrowDown} from "react-icons/hi";
import Fade from 'react-reveal/Fade';

export default function TechStacks () {
      return (
        <Section id='what-we-use'>
            <Fade bottom>
                <h3>What we use <HiArrowNarrowDown/></h3>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Nunc vel risus commodo viverra maecenas accumsan. 
                </Description>
                <SectionWrap>
                    <TechStack>
                        <ImageWrap>
                            <Image src={Ansible} alt="Company Logo" />
                            <h6>Ansible</h6>
                        </ImageWrap>
                        <ImageWrap>
                            <Image src={Docker} alt="Company Logo" />
                            <h6>Docker</h6>
                        </ImageWrap>
                        <ImageWrap>
                            <Image src={Amazon} alt="Company Logo" />
                            <h6>AWS</h6>
                        </ImageWrap>
                        <ImageWrap>
                            <Image src={Kubernetes} alt="Company Logo" />
                            <h6>Kubernetes</h6>
                        </ImageWrap>
                        <ImageWrap>
                            <Image src={Gitlab} alt="Company Logo" />
                            <h6>Gitlab CI</h6>
                        </ImageWrap>
                        <ImageWrap>
                            <Image src={Terraform} alt="Company Logo" />
                            <h6>Terraform</h6>
                        </ImageWrap>
                        <ImageWrap>
                            <Image src={Azure} alt="Company Logo" />
                            <h6>Azure</h6>
                        </ImageWrap>
                        <ImageWrap>
                            <Image src={GoogleCloud} alt="Company Logo" />
                            <h6>GCP</h6>
                        </ImageWrap>
                        <ImageWrap>
                            <Image src={GoogleCloud} alt="Company Logo" />
                            <h6>GCP</h6>
                        </ImageWrap>
                    </TechStack>

                    <TechDescription>
                        <DescriptionHead>Technologies used by our Experts</DescriptionHead>
                        <DescriptionText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Nunc vel risus commodo viverra maecenas accumsan. 
                        </DescriptionText>
                        <DescriptionText>
                            Tincidunt eget nullam non nisi est. Sagittis eu volutpat odio facilisis mauris sit. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Nunc vel risus commodo viverra maecenas accumsan. 
                        </DescriptionText>
                    </TechDescription>
                </SectionWrap>
            </Fade>
        </Section>
    );
}
