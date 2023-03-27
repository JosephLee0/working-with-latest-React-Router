import { Link } from "react-router-dom";
import PageContent from "../components/pageContent";

function HomePage() {
  return (
    <PageContent title="Welcome to our Amazing Event">
      <p>
        You can browse our events <Link to={"/events"}>here</Link>
      </p>
    </PageContent>
  );
}

export default HomePage;
