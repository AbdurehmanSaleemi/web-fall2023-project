import CustomHeading from "../components/Headings";
import React, { useEffect } from "react";
import { Box, Text, VStack, Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";
import CustomFooter from "../components/CustomFooter";
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import remarkGfm from 'remark-gfm';
import Header from "../components/Header";

const newTheme = {
  p: props => {
    const { children } = props;
    return (
      <Text mb={4} fontSize={'lg'} mt={'4'}>
        {children}
      </Text>
    );
  },
};

const Story = () => {

  const gradientTextContainerStyle = {
    background: `linear-gradient(150deg, #E2A80A 0%, #F07B3F 100%)`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block",
    fontWeight: "bold", // Make the text bolder
  };

  const [story, setStory] = React.useState(`
  ### Sudha.app: Bridging the Gap Between Tradition and Technology
  
  **Our Heritage:**
  Vinod Dulal Yoga Institute, founded by Mr. Vinod Dulal in the 1980s, boasts a 40+ year legacy. Trained under the renowned guru Sri BKS Iyengar for 16 years, Vinod Dulal established an institute preserving the principles of asana precision, body alignment, and the pursuit of 'perfect' yoga asana. This unique blend of traditional wisdom and his student's insights led to the birth of 'Vinod Dulal Yoga.'
  #### Vinod Dulal Yoga: The Essence 
  Vinod Dulal Yoga is pure Hatha yoga devoid of pretence, and does not use props like belts and chairs. Instead, it focuses on customising poses for individuals, accommodating their limitations and capabilities. The emphasis lies in mastering achievable poses rather than fueling the ego by attempting the impossible. This practice promotes growth in all avenues; often including mastery of those poses which initially seemed impossible. The yoga institute can tell you stories of students over the years, who defied their doctors' opinions and achieved health and fitness which was considered impossible by the scientific community.
  
  Classes are held five times a week, emphasising punctuality, cleanliness, and dietary habits around class times. Discipline is at the core of this tradition, ensuring a holistic yoga experience.
  
  #### Continuing Tradition 
  Even after four decades, Vinod Dulal continues to teach yoga in this unique and traditional Hatha yoga style, preserving the essence of the practice.
  
  ## The New Generation
  Rohit Dulal, a US-trained Mechanical Engineer and Materials Scientist, brought a fresh perspective after spending a decade in the United States. He recognized the cultural gap between Western yoga and its Eastern roots, leading to commodification and cultural appropriation. As an engineer, Rohit envisioned a way to marry modern technology with ancient yoga practices while staying true to the essence of yoga.

  This vision culminated in the creation of Sudha.app, a groundbreaking yoga app that bridges this cultural divide. Sudha.app proudly retains its 'desi' roots, showcasing yoga asanas with their Sanskrit names and featuring Sudha, the AI yoga guru, as a swadeshi character.
  Sudha.app embodies the fusion of tradition and technology, offering a genuinely Indian approach to yoga in the digital age. Join us on this journey to rediscover the authentic essence of yoga and experience the transformative power of Vinod Dulal Yoga with Sudha.app. Embrace yoga as a way of life, just as the Dulal family has for generations.`)
  return (
    <>
      <VStack
        w={'full'}
        minHeight={'100vh'}
        background={'brand.100'}
        paddingX={{ base: 3, sm: 12, md: 12, lg: 24, xl: 40, '2xl': 56 }}
        paddingY={10}
        color={'brand.500'}>
        <Header />
        <Flex
          direction={'column'}
          justifyContent="center" alignItems="center" mt={10}>
          <CustomHeading
            type="primary"
            fontSize={{ base: "3xl", sm: "3xl", md: "4xl", lg: "8xl" }}
            lineHeight={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
            sx={gradientTextContainerStyle}
            text="Our Story"
          />
          <Box maxW="container.lg" py={4} px={8} mb={'24'} mt={'12'}>
            <ReactMarkdown
              components={ChakraUIRenderer(newTheme)}
              children={story}
              remarkPlugins={[remarkGfm]}
            />
          </Box>
        </Flex>
        <Footer />
      </VStack >
    </>
  );
};

export default Story;

/* <Footer /> */
