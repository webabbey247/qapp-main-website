import React from 'react';
import {Content} from "../components";
import PageLayout from "../Layouts/PageLayout";


const OnboardedMerchants = () => {
  return (
    <>
    <PageLayout>
      <Content pageType='activeMerchants' />
    </PageLayout>
    </>
  )
}

export default OnboardedMerchants;