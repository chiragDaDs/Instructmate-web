import {
    Image,
    Container,
    Title,
    Text,
    List,
    ThemeIcon,
  } from '@mantine/core';

   function HeroBullets() {
    return (
      <div>
        <Container>
          <div className="flex justify-between pt-5 pb-5 ">
            <div className="max-w-screen-sm	">
              <Title order={1}>
              Experience a smarter way of teaching with our <span className="bg-orange-red text-white rounded-lg "> AI-powered LMS</span>.  the future of education is here.
              {/* . */}

              </Title>
              <Text color="dimmed" mt="md">
              Our platform is designed to help  <span className="bg-orange-red opacity-80 p-0.5 text-white rounded-sm ">Teacherpreneurs</span> like you create engaging and personalized learning experiences for your students
              </Text>
  
              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon radius="xl" size="xl" variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
</svg>


                  </ThemeIcon>
                }
              >
                <List.Item>
                <b>Feedback system </b>"Give your students a voice and create a safe space for feedback with our anonymous student feedback feature - empowering students to speak up and share their thoughts
      
                </List.Item>
                <List.Item>
                  <b>Inbuilt course versioning </b> Streamline your course preparation process with our course versioning feature, designed to make it easy for you to use and reuse course content across multiple semesters and student cohorts.
                </List.Item>
                <List.Item>
                  <b>Inbuilt Exam System</b> Administer exams with confidence through our secure remote video proctoring system. Create a variety of assessments from multiple-choice to coding without hassle using our online exam tool.
                </List.Item>
              </List>
            </div>
            <Image src="./images/class.svg" className="flex-1" />
          </div>
        </Container>
      </div>
    );
  }

  export default HeroBullets;