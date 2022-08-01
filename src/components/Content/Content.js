import React, { useState } from "react";
import {
  ContentSection,
  ContentBankSection,
  MerchantSection,
  ContentVideoContainer,
  // ContentVideoPlaceholder,
  ContentIconHolder,
  // ContentIcon,
  ContentDescription,
  ContentCta,
  ContentContainer,
  ContentBackIcon,
  ContentSearchForm,
  ContentSearchFormContainer,
  SearchInput,
  SearchIconHolder,
  ContentBankList,
  ContentBankChild,
  ContentBankChildLTR,
  ContentBankLogo,
  ContentBankChildRTL,
  ContentBankCta,
  // ContentFormLTR,
  // ContentFormRTL,
  MobileContainer,
  MobileVideoContainer,
  MobileBackIcon
} from "./ContentStyles";
import { Container } from "../../globalStyles";
import { MFIForm, MerchantForm } from "components/Form";
import { Content2Column2, ContentFullColumn, ContentRow, GeneralMdText, GeneralSmText } from "styles/GlobalCss";
import { BiArrowBack, BiSearch, BiCaretRight } from "react-icons/bi";
import { myBankIcon, gtbIcon, kudaIcon, bankPlaceholder } from "assets/images";
import { Link } from "react-router-dom";




const Content = ({ pageType }) => {

  const [logisticVid, setLogisticVid] = useState(false)

  return (
    <>
      {pageType === "finance" && (
        <ContentSection>
          <ContentContainer>
            <ContentRow>
              <ContentFullColumn>
                <Link to="/">
                  <MobileBackIcon>
                    <BiArrowBack size="28" color="var(--icon-color)" />
                  </MobileBackIcon>
                </Link>
              </ContentFullColumn>

              <Content2Column2>
                <ContentVideoContainer>
                  <GeneralMdText fontSize="24px" margin="23px 0 10px" lineHeight="35px" textAlign="left" color="var(--orange)" textTransform="unset" fontWeight="600">See How it works</GeneralMdText>
                  {/* <video width="550" frameBorder="0" height="350" preload="none" autoPlay="true" loop="true" playsInline="" poster={video}>
                      <source src={videoMP4} type="video/mp4" />
                      </video> */}
                  <iframe width="100%" frameBorder="0" height="350" src="https://www.youtube.com/embed/pygGug3TCaI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                </ContentVideoContainer>
              </Content2Column2>

              <Content2Column2>
                <MFIForm />
              </Content2Column2>

              <Content2Column2>
                <MobileContainer>
                  <GeneralMdText fontSize="24px" margin="17px 0" lineHeight="35px" textAlign="left" color="var(--orange)" textTransform="unset" fontWeight="600">See How it works</GeneralMdText>
                  <MobileVideoContainer>
                    {/* <video width="550" frameBorder="0" height="350" preload="none" autoPlay="true" loop="true" playsInline="" poster={video}>
                    <source src={videoMP4} type="video/mp4" />
                    </video> */}
                    <iframe width="100%" frameBorder="0" height="350" src="https://www.youtube.com/embed/pygGug3TCaI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </MobileVideoContainer>
                </MobileContainer>
              </Content2Column2>
            </ContentRow>
          </ContentContainer>
        </ContentSection>
      )}

      {pageType === "merchant" && (
        <MerchantSection>
          <ContentContainer>
            <ContentRow>
              <ContentFullColumn>
                <Link to="/">
                  <MobileBackIcon>
                    <BiArrowBack size="28" color="var(--icon-color)" />
                  </MobileBackIcon>
                </Link>
              </ContentFullColumn>
              <Content2Column2>
                <ContentVideoContainer>
                  <GeneralMdText fontSize="24px" margin="0.65rem 0" lineHeight="35px" textAlign="left" color="var(--orange)" textTransform="unset" fontWeight="600">{logisticVid ? "Logistic" : "E-Commerce"}: See How it works</GeneralMdText>

                  {logisticVid ? (
                    <iframe width="100%" frameBorder="0" height="350" src="https://www.youtube.com/embed/pygGug3TCaI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  ) : (
                    <iframe width="100%" frameBorder="0" height="350" src="https://www.youtube.com/embed/pygGug3TCaI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  )}

                  <GeneralSmText onClick={() => setLogisticVid(!logisticVid)} margin="1rem 0"
                    color="var(--primary)" fontSize="18px" lineHeight="29.05px" fontWeight="600" textAlign="left" textTransform="unset">
                    {logisticVid ? "E-Commerce" : "Logistics"}: See How it works
                  </GeneralSmText>

                </ContentVideoContainer>
              </Content2Column2>

              <Content2Column2>
                <MerchantForm />
              </Content2Column2>

              <Content2Column2>
                <MobileContainer>
                  <GeneralMdText fontSize="24px" margin="0 0 10px" lineHeight="35px" textAlign="left" color="var(--orange)" textTransform="unset" fontWeight="600">See How it works</GeneralMdText>
                  <MobileVideoContainer>
                  {logisticVid ? (
                    <iframe width="100%" frameBorder="0" height="350" src="https://www.youtube.com/embed/pygGug3TCaI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  ) : (
                    <iframe width="100%" frameBorder="0" height="350" src="https://www.youtube.com/embed/pygGug3TCaI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  )}
                  </MobileVideoContainer>
                  <GeneralSmText onClick={() => setLogisticVid(!logisticVid)} margin="1rem 0"
                    color="var(--primary)" fontSize="18px" lineHeight="29.05px" fontWeight="600" textAlign="left" textTransform="unset">
                    {logisticVid ? "E-Commerce" : "Logistics"}: See How it works
                  </GeneralSmText>
                </MobileContainer>
              </Content2Column2>
            </ContentRow>
          </ContentContainer>
        </MerchantSection>
      )}

      {pageType === "consumer" && (
        <ContentSection>
          <Container>
            {/* <ContentHeading>Consumers</ContentHeading> */}
            <ContentIconHolder>
            </ContentIconHolder>
            <ContentDescription>
              This app is termed the “super app” to easily explain the quality,
              variety and super features
            </ContentDescription>
            <ContentCta to='/'>Download Now</ContentCta>
          </Container>
        </ContentSection>
      )}

      {pageType === "mybanks" && (
        <ContentBankSection>
          <ContentContainer>
            <ContentRow>
              <ContentFullColumn>
                <Link to="/">
                  <ContentBackIcon>
                    <BiArrowBack size="28" color="var(--icon-color)" />
                  </ContentBackIcon>
                </Link>
              </ContentFullColumn>

              <ContentFullColumn>
                <GeneralMdText textAlign="center" color="var(--orange)" fontSize="30px" lineHeight="40px" fontWeight="600" textTransform="unset">
                  List of Financial Institution you bank with
                </GeneralMdText>

                <ContentSearchForm>
                  <ContentSearchFormContainer>
                    <SearchInput
                      name='search'
                      type='text'
                      placeholder='Search'
                    />
                    <SearchIconHolder>
                      <BiSearch color="#292D32" size='28' strokeWidth="0" />
                    </SearchIconHolder>
                  </ContentSearchFormContainer>
                </ContentSearchForm>

                <ContentBankList>
                  <ContentSearchFormContainer>
                    <ContentBankChild>
                      <ContentBankChildLTR>
                        <ContentBankLogo src={myBankIcon} alt="First bank" />
                        <GeneralSmText textAlign="center" color="var(--primary)" fontSize="20px" lineHeight="24px" fontWeight="600" textTransform="capitalize" margin="5px 0 0">First bank</GeneralSmText>
                      </ContentBankChildLTR>
                      <ContentBankChildRTL>
                        <BiCaretRight color="var(--icon-color)" size='28' strokeWidth="0" />
                      </ContentBankChildRTL>
                    </ContentBankChild>

                    <ContentBankChild>
                      <ContentBankChildLTR>
                        <ContentBankLogo src={gtbIcon} alt="Guaranty Trust Bank" />
                        <GeneralSmText textAlign="center" color="var(--primary)" fontSize="20px" lineHeight="24px" fontWeight="600" textTransform="capitalize" margin="5px 0 0">Guaranty Trust Bank</GeneralSmText>
                      </ContentBankChildLTR>
                      <ContentBankChildRTL>
                        <BiCaretRight color="var(--icon-color)" size='28' strokeWidth="0" />
                      </ContentBankChildRTL>
                    </ContentBankChild>

                   <Link to="/financial-institutions/onboarded-banks">
                   <ContentBankCta>
                      Want to bank with a new Financial Institution?
                    </ContentBankCta>
                   </Link>
                  </ContentSearchFormContainer>
                </ContentBankList>


              </ContentFullColumn>
            </ContentRow>
          </ContentContainer>
        </ContentBankSection>
      )}


      {pageType === "onboarded" && (
        <ContentBankSection>
          <ContentContainer>

            <ContentRow>

              <ContentFullColumn>
                <Link to="/">
                  <ContentBackIcon>
                    <BiArrowBack size="28" color="var(--icon-color)" />
                  </ContentBackIcon>
                </Link>
              </ContentFullColumn>

              <ContentFullColumn>
                <GeneralMdText textAlign="center" color="var(--orange)" fontSize="30px" lineHeight="40px" fontWeight="600" textTransform="unset">
                  Bank with other Financial Institution
                </GeneralMdText>

                <ContentSearchForm>
                  <ContentSearchFormContainer>
                    <SearchInput
                      name='search'
                      type='text'
                      placeholder='Search'
                    />
                    <SearchIconHolder>
                      <BiSearch color="#292D32" size='28' strokeWidth="0" />
                    </SearchIconHolder>
                  </ContentSearchFormContainer>
                </ContentSearchForm>

                <ContentBankList>
                  <ContentSearchFormContainer>
                    <ContentBankChild>
                      <ContentBankChildLTR>
                        <ContentBankLogo src={bankPlaceholder} alt="Chase MFB" />
                        <GeneralSmText textAlign="center" color="var(--primary)" fontSize="20px" lineHeight="24px" fontWeight="600" textTransform="capitalize" margin="5px 0 0">Chase MFB</GeneralSmText>
                      </ContentBankChildLTR>
                      <ContentBankChildRTL>
                        <BiCaretRight color="var(--icon-color)" size='28' strokeWidth="0" />
                      </ContentBankChildRTL>
                    </ContentBankChild>

                    <ContentBankChild>
                      <ContentBankChildLTR>
                        <ContentBankLogo src={kudaIcon} alt="Kuda MFB" />
                        <GeneralSmText textAlign="center" color="var(--primary)" fontSize="20px" lineHeight="24px" fontWeight="600" textTransform="capitalize" margin="5px 0 0">Kuda MFB</GeneralSmText>
                      </ContentBankChildLTR>
                      <ContentBankChildRTL>
                        <BiCaretRight color="var(--icon-color)" size='28' strokeWidth="0" />
                      </ContentBankChildRTL>
                    </ContentBankChild>

                    <ContentBankChild>
                      <ContentBankChildLTR>
                        <ContentBankLogo src={bankPlaceholder} alt="Tower Microfinance" />
                        <GeneralSmText textAlign="center" color="var(--primary)" fontSize="20px" lineHeight="24px" fontWeight="600" textTransform="capitalize" margin="5px 0 0">Tower Microfinance</GeneralSmText>
                      </ContentBankChildLTR>
                      <ContentBankChildRTL>
                        <BiCaretRight color="var(--icon-color)" size='28' strokeWidth="0" />
                      </ContentBankChildRTL>
                    </ContentBankChild>


                  </ContentSearchFormContainer>
                </ContentBankList>
              </ContentFullColumn>
            </ContentRow>
          </ContentContainer>
        </ContentBankSection>
      )}

{pageType === "activeMerchants" && (
        <ContentBankSection>
          <ContentContainer>

            <ContentRow>

              <ContentFullColumn>
                <Link to="/">
                  <ContentBackIcon>
                    <BiArrowBack size="28" color="var(--icon-color)" />
                  </ContentBackIcon>
                </Link>
              </ContentFullColumn>

              <ContentFullColumn>
                <GeneralMdText textAlign="center" color="var(--orange)" fontSize="30px" lineHeight="40px" fontWeight="600" textTransform="unset">
                Merchants actively working with us
                </GeneralMdText>

                <ContentSearchForm>
                  <ContentSearchFormContainer>
                    <SearchInput
                      name='search'
                      type='text'
                      placeholder='Search'
                    />
                    <SearchIconHolder>
                      <BiSearch color="#292D32" size='28' strokeWidth="0" />
                    </SearchIconHolder>
                  </ContentSearchFormContainer>
                </ContentSearchForm>

                <ContentBankList>
                  <ContentSearchFormContainer>
                    <ContentBankChild>
                      <ContentBankChildLTR>
                        <ContentBankLogo src={bankPlaceholder} alt="Ryan store" />
                        <GeneralSmText textAlign="center" color="var(--primary)" fontSize="20px" lineHeight="24px" fontWeight="600" textTransform="capitalize" margin="5px 0 0">Ryan store</GeneralSmText>
                      </ContentBankChildLTR>
                      <ContentBankChildRTL>
                        <BiCaretRight color="var(--icon-color)" size='28' strokeWidth="0" />
                      </ContentBankChildRTL>
                    </ContentBankChild>

                    <ContentBankChild>
                      <ContentBankChildLTR>
                        <ContentBankLogo src={bankPlaceholder} alt="Maryflo Fashion House" />
                        <GeneralSmText textAlign="center" color="var(--primary)" fontSize="20px" lineHeight="24px" fontWeight="600" textTransform="capitalize" margin="5px 0 0">Maryflo Fashion House</GeneralSmText>
                      </ContentBankChildLTR>
                      <ContentBankChildRTL>
                        <BiCaretRight color="var(--icon-color)" size='28' strokeWidth="0" />
                      </ContentBankChildRTL>
                    </ContentBankChild>

                    <ContentBankChild>
                      <ContentBankChildLTR>
                        <ContentBankLogo src={bankPlaceholder} alt="Beebah’s Shoes and bags" />
                        <GeneralSmText textAlign="center" color="var(--primary)" fontSize="20px" lineHeight="24px" fontWeight="600" textTransform="capitalize" margin="5px 0 0">Beebah’s Shoes and bags</GeneralSmText>
                      </ContentBankChildLTR>
                      <ContentBankChildRTL>
                        <BiCaretRight color="var(--icon-color)" size='28' strokeWidth="0" />
                      </ContentBankChildRTL>
                    </ContentBankChild>

                    <ContentBankChild>
                      <ContentBankChildLTR>
                        <ContentBankLogo src={bankPlaceholder} alt="Emcare Pharmacy" />
                        <GeneralSmText textAlign="center" color="var(--primary)" fontSize="20px" lineHeight="24px" fontWeight="600" textTransform="capitalize" margin="5px 0 0">Emcare Pharmacy</GeneralSmText>
                      </ContentBankChildLTR>
                      <ContentBankChildRTL>
                        <BiCaretRight color="var(--icon-color)" size='28' strokeWidth="0" />
                      </ContentBankChildRTL>
                    </ContentBankChild>
                  </ContentSearchFormContainer>
                </ContentBankList>
              </ContentFullColumn>
            </ContentRow>
          </ContentContainer>
        </ContentBankSection>
      )}


    </>
  );
};

export default Content;
