import React from 'react';
import {Section,
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

export default function TechStacks () {
      return (
        <Section>
            <h3>What we use</h3>
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
                        Your dev team is not tied to a monolithic structure and can use any expert microservices.
                        No more need to maintain several stacks for several usage, all content is centralized.
                    </DescriptionText>
                    <DescriptionText>
                        Your dev team is not tied to a monolithic structure and can use any expert microservices.
                    </DescriptionText>
                </TechDescription>
            </SectionWrap>
        </Section>
    );
}
