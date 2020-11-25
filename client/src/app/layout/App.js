import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import "./styles.css";
import NavBar from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

const App = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getActivities = async () => {
      try {
        const res = await axios.get("/api/activities");
        setActivities(res.data);
      } catch (e) {
        throw e;
      }
    };

    getActivities();
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Container style={{marginTop: "7em"}}>
        <ActivityDashboard activities={activities} />
      </Container>
    </Fragment>
  );
};

export default App;
