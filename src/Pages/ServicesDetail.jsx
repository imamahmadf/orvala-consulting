import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

function ServicesDetail() {
  return (
    <Box pt={"120px"}>
      <Container maxW={"1140px"}>
        {" "}
        <Box p={"20px"}>
          <Tabs isFitted variant="enclosed">
            <Flex flexDirection={"row"}>
              <TabList mb="1em" backgroundColor={"background"} me={"90px"}>
                <Flex flexDirection={"column"} minW={"300px"}>
                  <Tab _selected={{ bg: "primary", borderRadius: 0 }}>
                    1. Market Research & Analysis (MRA)
                  </Tab>
                  <Tab _selected={{ bg: "primary", borderRadius: 0 }}>
                    2. Market Entry Strategy (MES):
                  </Tab>{" "}
                  <Tab _selected={{ bg: "primary", borderRadius: 0 }}>
                    1. Market Research & Analysis (MRA)
                  </Tab>
                  <Tab _selected={{ bg: "primary", borderRadius: 0 }}>
                    2. Market Entry Strategy (MES):
                  </Tab>
                </Flex>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>
                    Objective: To gather critical information about the Russian
                    market, assess its potential, and make informed decisions
                    about market entry. Key Activities: Understanding Market
                    Dynamics: Analyze the Russian market's dynamics, including
                    supply and demand factors, industry trends, and economic
                    conditions. This involves studying market size, growth
                    potential, and historical performance. Customer Behavior
                    Analysis: Research and understand the preferences,
                    behaviors, and buying patterns of Russian consumers or
                    businesses within the target industry. Identify key
                    demographics and psychographics that affect buying
                    decisions. Competitor Analysis: Identify and assess the
                    major competitors in the Russian market. Analyze their
                    strengths, weaknesses, strategies, and market positioning.
                    This helps in understanding the competitive landscape.
                    Market Trends and Opportunities: Stay updated on the latest
                    market trends and emerging opportunities. Assess the demand
                    for specific products or services and identify niches where
                    the company can excel. Regulatory and Cultural Factors:
                    Examine regulatory requirements, import/export regulations,
                    and any cultural considerations that may impact market
                    entry. Understanding legal and cultural nuances is crucial
                    for compliance and successful market penetration. Data
                    Collection and Analysis: Gather data from various sources,
                    including market reports, government publications, surveys,
                    and industry associations. Analyze this data to draw
                    meaningful insights. Service Provider: Interpretation and
                    Language Support Services (ILS): Translation and
                    interpretation services may be necessary to access and
                    interpret local market data, reports, and communicate
                    effectively with Russian counterparts.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>
                    Objective: To devise a clear and effective strategy for
                    entering the Russian market, aligning with the company's
                    objectives and minimizing risks. Key Activities: Entry
                    Method Selection: Evaluate various market entry methods,
                    such as exporting, joint ventures, partnerships, or
                    establishing subsidiaries. Consider factors like capital
                    investment, control, and market reach. Risk Assessment:
                    Conduct a thorough risk assessment, identifying potential
                    risks and challenges associated with each entry method.
                    Evaluate political, economic, legal, and operational risks.
                    Market Segmentation: Define and segment the target market
                    within Russia. Determine which regions or demographics offer
                    the most promising opportunities based on research findings.
                    Competitive Positioning: Define the company's unique selling
                    propositions (USPs) and positioning strategy within the
                    Russian market. Differentiate the company from competitors.
                    Market Entry Timing: Determine the optimal timing for market
                    entry, considering seasonal variations, market conditions,
                    and competitor activities. Resource Allocation: Allocate
                    resources efficiently, including budget, personnel, and
                    technology, to support the chosen market entry strategy.
                    Market Entry Plan: Create a detailed plan outlining the
                    specific steps, milestones, and timelines for implementing
                    the chosen strategy. Include a budget and resource
                    allocation plan. Service Providers: Due Diligence Services
                    (DDS): Due diligence services may be necessary to assess
                    potential partners or acquisition targets for joint ventures
                    or subsidiary establishment. Interpretation and Language
                    Support Services (ILS): Assistance with legal and business
                    documentation translation and interpretation when dealing
                    with local authorities and partners. Investment Advisory and
                    Documentation Services (IAD): Expert guidance on financial
                    aspects, including investment structuring, funding sources,
                    and legal documentation for partnerships or investments.
                    Government and Stakeholder Relations (GSR): Engagement with
                    local authorities and stakeholders may be required when
                    forming partnerships or establishing subsidiaries. Factory
                    Visit (FV): When considering manufacturing or production
                    facilities, on-site visits to potential factories or
                    partners may be essential.
                  </p>
                </TabPanel>{" "}
                <TabPanel>
                  <p>
                    Objective: To ensure that the company complies with Russian
                    laws and regulations, including business registration,
                    permits, and legal requirements. Key Activities: Regulatory
                    Research: Thoroughly research and understand the specific
                    legal and regulatory requirements relevant to the company's
                    industry and market entry method in Russia. Business
                    Registration: Assist the company in registering its business
                    in compliance with Russian laws. This may include selecting
                    the appropriate legal structure, such as an LLC (Limited
                    Liability Company) or joint venture, and completing the
                    necessary documentation. Permit Acquisition: Identify and
                    secure any permits or licenses required for the company's
                    operations in Russia. This may involve permits related to
                    import/export, environmental compliance, or
                    industry-specific regulations. Tax Compliance: Ensure the
                    company understands and complies with Russian tax laws,
                    including corporate income tax, value-added tax (VAT), and
                    any other applicable taxes. Determine the most tax-efficient
                    structure for the business. Contractual Compliance: Review
                    and draft contracts and agreements, ensuring they comply
                    with Russian contract law. This includes agreements with
                    partners, distributors, suppliers, and customers.
                    Intellectual Property Protection: Safeguard the company's
                    intellectual property rights in Russia through trademark and
                    patent registration, if applicable. Labor and Employment
                    Compliance: Comply with Russian labor laws regarding
                    employment contracts, employee benefits, and workplace
                    regulations. Service Providers: Government and Stakeholder
                    Relations (GSR): Assistance in navigating government
                    approvals and permits, and ensuring compliance with local
                    regulations. Interpretation and Language Support Services
                    (ILS): Translation and interpretation services for legal
                    documents and interactions with local authorities.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>
                    Objective: To identify suitable partners, distributors, or
                    representatives in Russia and establish productive business
                    relationships. Key Activities: Partner Profiling: Define the
                    ideal characteristics and qualifications of potential
                    partners based on the company's goals and market research
                    findings. Market Scanning: Conduct a comprehensive scan of
                    the Russian market to identify potential partners or
                    distributors. This may involve attending industry events,
                    networking, and utilizing industry databases. Due Diligence:
                    Perform due diligence on potential partners to assess their
                    credibility, financial stability, reputation, and past
                    performance. Verify their capabilities and alignment with
                    the company's objectives. Negotiations: Initiate
                    negotiations with selected partners to outline terms,
                    conditions, and expectations for collaboration. These
                    negotiations may include discussions on pricing,
                    distribution agreements, and partnership structures. Legal
                    Agreements: Draft and finalize legal agreements, such as
                    distribution agreements, joint venture agreements, or
                    partnership contracts, to formalize the business
                    relationship. Relationship Building: Cultivate strong
                    relationships with selected partners by fostering open
                    communication, trust, and mutual understanding. Effective
                    relationship management is crucial for successful
                    partnerships. Service Providers: Due Diligence Services
                    (DDS): Conducting due diligence on potential partners to
                    assess their suitability and reliability. Investment
                    Advisory and Documentation Services (IAD): Providing expert
                    guidance on the legal and financial aspects of partnership
                    agreements and contracts. Government and Stakeholder
                    Relations (GSR): Facilitating interactions with local
                    stakeholders, including potential partners or distributors.
                    Interpretation and Language Support Services (ILS): Offering
                    language support during negotiations and contract drafting
                    for effective communication with Russian counterparts.
                  </p>
                </TabPanel>
              </TabPanels>
            </Flex>
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
}

export default ServicesDetail;
