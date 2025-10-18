
import { ProgrammaticContent } from '@/components/ProgrammaticContent';
import Head from 'next/head';

const PactPage = () => {
  return (
    <>
      <Head>
        <title>Hire Pact Developers | Expert Contract Testing Teams</title>
        <meta
          name="description"
          content="Hire expert Pact developers for contract testing. Ensure your microservices work together seamlessly with our top-tier talent."
        />
      </Head>
      <ProgrammaticContent
        technology="Pact"
        description="Pact is a code-first tool for testing HTTP and message integrations using contract tests. Contract tests assert that inter-application messages conform to a shared understanding that is documented in a contract. Without contract testing, the only way to ensure that applications will work correctly together is by using expensive and brittle integration tests."
        country="mexico"
      />
    </>
  );
};

export default PactPage;
